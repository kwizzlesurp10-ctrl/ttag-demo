import chalk from 'chalk';
import ora from 'ora';
import { ModelBridge } from '../lib/model-bridge.js';

export interface GenerateOptions {
  prompt: string;
  model: string;
  duration: string;
  output: string;
}

export async function generateCommand(options: GenerateOptions): Promise<void> {
  const spinner = ora('Initializing generation...').start();

  // Validate inputs
  const duration = parseInt(options.duration, 10);
  if (isNaN(duration) || duration <= 0 || duration > 120) {
    spinner.fail('Invalid duration. Must be between 1 and 120 seconds.');
    return;
  }

  // Check environment
  spinner.text = 'Checking environment...';
  const bridge = new ModelBridge();
  const envCheck = await bridge.checkEnvironment();
  
  if (!envCheck.ready) {
    spinner.fail('Environment check failed:');
    envCheck.issues.forEach((issue) => console.log(chalk.red(`  - ${issue}`)));
    console.log(chalk.yellow('\nRun: bash scripts/setup.sh'));
    return;
  }

  spinner.text = `Generating ${duration}s audio with ${options.model}...`;
  spinner.clear();

  // Generate audio
  const result = await bridge.generate({
    prompt: options.prompt,
    model: options.model,
    duration,
    output: options.output,
  });

  spinner.clear();

  if (result.success) {
    console.log(chalk.green(`\n✓ Audio generated successfully!`));
    console.log(chalk.green(`  Output: ${result.audioPath}`));
    console.log(chalk.dim(`  Model: ${options.model}`));
    console.log(chalk.dim(`  Duration: ${duration}s`));
    console.log(chalk.dim(`  Prompt: "${options.prompt}"`));
  } else {
    console.log(chalk.red(`\n✗ Generation failed!`));
    console.log(chalk.red(`  Error: ${result.error}`));
    process.exit(1);
  }
}

