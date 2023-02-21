import inquirer from 'inquirer';

async function main() {
  const { num1, num2 } = await inquirer.prompt([
    {
      name: 'num1',
      message: 'Enter the first number:',
      type: 'number',
    },
    {
      name: 'num2',
      message: 'Enter the second number:',
      type: 'number',
    },
  ]);

  const { operation } = await inquirer.prompt([
    {
      name: 'operation',
      message: 'Select an operation:',
      type: 'list',
      choices: ['add', 'subtract', 'multiply', 'divide'],
    },
  ]);

  let result: number;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      console.log('Invalid operation');
      return;
  }

  console.log(`The result is: ${result}`);
}

main();
