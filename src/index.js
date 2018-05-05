#!/usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')
const { compose, shell, upperUnderscoreSeparated, toFormattedRoutes } = require('./utils')
const actions = require('./actions')

const askQuestions = () =>
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name ? 🚀'
      },
      {
        type: 'input',
        name: 'publicRoutes',
        filter: toFormattedRoutes,
        message: 'Which public (one level deep) routes do you want to add (camelCase) ? 👀'
      },
      {
        type: 'input',
        name: 'privateRoutes',
        filter: toFormattedRoutes,
        message: 'Which private (one level deep) routes do you want to add (camelCase) ? 🚫'
      }
    ])
    .then(compose(...actions).against)

program
  .version('0.1.0')
  .command('new')
  .action(askQuestions)

program.parse(process.argv)
