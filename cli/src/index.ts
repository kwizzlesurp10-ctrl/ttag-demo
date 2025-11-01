#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { generateCommand } from './commands/generate.js';
import { listModelsCommand } from './commands/list-models.js';
import { readFileSync } from 'fs';
import { join } from 'path';

// Load version from package.json
const packageJson = JSON.parse(readFileSync(join(__dirname, '../../../package.json'), 'utf8'));
const version = packageJson.version;

const program = new Command();

program
  .name('ttag')
  .description('Text-to-Audio AI Music Generator - Generate music and audio from text prompts')
  .version(version, '-v, --version', 'display version number');

program
  .command('generate')
  .alias('gen')
  .description('Generate audio from text prompt')
  .requiredOption('-p, --prompt <text>', 'Text description of desired audio')
  .option('-m, --model <model>', 'Model to use (musicgen, audiocraft, riffusion)', 'musicgen')
  .option('-d, --duration <seconds>', 'Duration in seconds', '30')
  .option('-o, --output <path>', 'Output file path', 'output.mp3')
  .action(async (options) => {
    try {
      await generateCommand(options);
    } catch (error) {
      console.error(chalk.red('Error:'), error instanceof Error ? error.message : error);
      process.exit(1);
    }
  });

program
  .command('list-models')
  .alias('models')
  .description('List available models')
  .action(() => {
    listModelsCommand();
  });

program
  .command('server')
  .description('Start API server')
  .option('-p, --port <port>', 'Server port', '3000')
  .action((options) => {
    console.log(chalk.blue(`Starting API server on port ${options.port}...`));
    console.log(chalk.yellow('🚧 API server not yet implemented'));
  });

program.parse();

