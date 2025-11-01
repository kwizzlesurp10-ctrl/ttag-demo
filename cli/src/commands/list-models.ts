import chalk from 'chalk';

export function listModelsCommand(): void {
  console.log(chalk.bold('\nAvailable Models:\n'));

  const models = [
    {
      name: 'musicgen',
      quality: '⭐⭐⭐⭐',
      speed: 'Fast',
      license: 'MIT',
      gpu: 'Recommended',
      status: '✅ Ready',
    },
    {
      name: 'audiocraft',
      quality: '⭐⭐⭐⭐⭐',
      speed: 'Medium',
      license: 'MIT',
      gpu: 'Required',
      status: '🚧 In Progress',
    },
    {
      name: 'riffusion',
      quality: '⭐⭐⭐',
      speed: 'Fast',
      license: 'Apache 2.0',
      gpu: 'Optional',
      status: '🚧 Planned',
    },
  ];

  models.forEach((model) => {
    console.log(chalk.bold.cyan(model.name.toUpperCase()));
    console.log(`  Quality: ${model.quality}`);
    console.log(`  Speed: ${model.speed}`);
    console.log(`  License: ${model.license}`);
    console.log(`  GPU: ${model.gpu}`);
    console.log(`  Status: ${model.status}\n`);
  });
}

