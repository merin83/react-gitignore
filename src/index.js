#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');

const gitignoreContent = `
# dependencies
/node_modules
/.pnp
.pnp.js
.next

# testing
/coverage

# production
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# If Packages have their independent repo
# /packages

# ignore log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.idea/
.vscode/
node_modules/
build
.DS_Store
*.tgz
my-app*
template/src/__tests__/__snapshots__/
lerna-debug.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
/.changelog
.npm/
dist
`;

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
    fs.writeFileSync(`${cwd}/.gitignore`, gitignoreContent);
    console.log('.gitignore successfully created');
  } else {
    console.log(`.gitignore creation failed choose 'y' to create it`);
  }
})();
