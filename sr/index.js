const program = require('commander');

const askQuestions = () => {}
program
  .version('0.1.0')
  .command('new')
  .action(askQuestions)
 
  program.parse(process.argv)
