#!/usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')
const { compose, shell } = require('./utils')
const actions = require('./actions')

const askQuestions = () =>
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name ?'
      }
    ])
    .then(compose(...actions).against)

program
  .version('0.1.0')
  .command('new')
  .action(askQuestions)

program.parse(process.argv)
