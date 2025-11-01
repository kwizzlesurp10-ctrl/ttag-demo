import { spawn } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';

export interface GenerateRequest {
  prompt: string;
  model: string;
  duration: number;
  output: string;
}

export interface GenerateResult {
  success: boolean;
  audioPath?: string;
  error?: string;
}

/**
 * Bridge between Node.js CLI and Python model runners.
 */
export class ModelBridge {
  private pythonPath: string;
  private modelsPath: string;

  constructor() {
    // Detect Python
    this.pythonPath = this.detectPython();
    // Find models path relative to project root
    // From dist/cli/src/lib -> project root
    const projectRoot = path.resolve(__dirname, '../../../../');
    this.modelsPath = path.join(projectRoot, 'models', 'python');
  }

  /**
   * Detect Python executable.
   */
  private detectPython(): string {
    // Check for python3 first, fallback to python
    try {
      // In real implementation, check PATH
      return 'python3';
    } catch {
      return 'python';
    }
  }

  /**
   * Generate audio using specified model.
   */
  async generate(request: GenerateRequest): Promise<GenerateResult> {
    const { prompt, model, duration, output } = request;

    console.log(chalk.dim(`Using ${model} model...`));

    // Create output directory if needed
    const outputDir = path.dirname(output);
    if (outputDir && outputDir !== '.') {
      await fs.mkdir(outputDir, { recursive: true });
    }

    // Spawn Python process
    return new Promise((resolve) => {
      const cliPath = path.join(this.modelsPath, 'cli.py');

      const args = [
        cliPath,
        model,  // Model name as first positional argument
        '--prompt', prompt,
        '--duration', duration.toString(),
        '--output', output,
      ];

      console.log(chalk.dim(`Running: ${this.pythonPath} ${args.join(' ')}`));

      const python = spawn(this.pythonPath, args, {
        cwd: this.modelsPath,
        stdio: ['pipe', 'pipe', 'pipe'],
      });

      let stdout = '';
      let stderr = '';

      python.stdout.on('data', (data) => {
        const text = data.toString();
        stdout += text;
        // Forward to user
        process.stdout.write(chalk.dim(text));
      });

      python.stderr.on('data', (data) => {
        const text = data.toString();
        stderr += text;
        // Forward to user
        process.stderr.write(chalk.red(text));
      });

      python.on('close', async (code) => {
        if (code === 0) {
          // Check if output file exists
          try {
            await fs.access(output);
            resolve({
              success: true,
              audioPath: output,
            });
          } catch {
            resolve({
              success: false,
              error: 'Generation completed but output file not found',
            });
          }
        } else {
          resolve({
            success: false,
            error: stderr || `Process exited with code ${code}`,
          });
        }
      });

      python.on('error', (error) => {
        resolve({
          success: false,
          error: `Failed to spawn Python: ${error.message}`,
        });
      });

      // Set timeout
      setTimeout(() => {
        python.kill();
        resolve({
          success: false,
          error: 'Generation timed out after 5 minutes',
        });
      }, 5 * 60 * 1000);
    });
  }

  /**
   * Check if Python and dependencies are available.
   */
  async checkEnvironment(): Promise<{ ready: boolean; issues: string[] }> {
    const issues: string[] = [];

    // Check Python
    try {
      await this.checkPythonVersion();
    } catch (error) {
      issues.push(`Python not found or version too old: ${error}`);
    }

    // Check if models directory exists
    try {
      await fs.access(this.modelsPath);
    } catch {
      issues.push(`Models directory not found: ${this.modelsPath}`);
    }

    // Check if requirements.txt exists in project root
    const requirementsPath = path.join(path.resolve(this.modelsPath, '../../'), 'requirements.txt');
    try {
      await fs.access(requirementsPath);
    } catch {
      issues.push('requirements.txt not found');
    }

    return {
      ready: issues.length === 0,
      issues,
    };
  }

  /**
   * Check Python version compatibility.
   */
  private async checkPythonVersion(): Promise<void> {
    return new Promise((resolve, reject) => {
      const python = spawn(this.pythonPath, ['--version']);
      let output = '';

      python.stdout.on('data', (data) => {
        output += data.toString();
      });

      python.on('close', (code) => {
        if (code === 0) {
          // Parse version
          const match = output.match(/(\d+)\.(\d+)/);
          if (match) {
            const major = parseInt(match[1], 10);
            const minor = parseInt(match[2], 10);
            if (major >= 3 && minor >= 9) {
              resolve();
            } else {
              reject(new Error(`Python ${major}.${minor} found, need 3.9+`));
            }
          } else {
            reject(new Error('Could not parse Python version'));
          }
        } else {
          reject(new Error('Python command failed'));
        }
      });

      python.on('error', () => {
        reject(new Error(`Python not found (tried ${this.pythonPath})`));
      });
    });
  }
}

