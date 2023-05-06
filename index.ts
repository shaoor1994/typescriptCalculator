#!/usr/bin/env node 
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { sleep } from './src/utils/index.js';

import inquirer from 'inquirer';
import { questions } from './src/questions.js';

import AnswersI from './src/ts/index';
import { performCalculation } from './src/calculator.js';

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow('Welcome to the CLI Calculator! A Project by Saad Shaoor Ghazanfar');
  
  await sleep();
  console.log(`
    ${chalk.bgCyan('Instructions ')}
    ${chalk.blue('1.')} Choose an operation.
    ${chalk.blue('2.')} Enter a first number.
    ${chalk.blue('3.')} Enter a second number.
    ${chalk.blue('4.')} Press enter to see the answer.  
  `)
  rainbowTitle.stop();
  await sleep(1000);
}

export default async function promptQuestions() {
  const answers = await inquirer.prompt(questions);
  return performCalculation(answers as AnswersI);
}

await welcome();
await promptQuestions();