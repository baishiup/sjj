const inquirer = require('inquirer');

module.exports = {
  // init选择
  prompt: async promptObj => {
    let answers = await inquirer.prompt([promptObj]);
    return answers;
  }
};
