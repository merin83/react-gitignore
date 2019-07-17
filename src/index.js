#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

(async () => {
  const { option } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'option',
      message: 'Get the .gitignore file',
      default: false,
    },
  ]);
  if (option) {
    const cwd = process.cwd();
    const srcPath = path.resolve(__dirname, 'src/config/.gitignore');
    console.log(cwd, 'which path it is');
    fs.copyFile(srcPath, `${cwd}/.gitignore`, err => {
      if (err) {
        console.log(srcPath, 'srcPath');
        console.log(
          'Please Make sure you have Node version 8.5 or higher installed on your system'
        );
        throw err;
      }
      console.log('.gitignore successfully created');
    });
  } else {
    console.log(`.gitignore creation failed choose 'y' to create it`);
  }
})();
