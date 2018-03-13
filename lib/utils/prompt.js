const inquirer = require('inquirer');

module.exports = function prompt(questions) {
  return new Promise((r, e) => {
    inquirer
      .prompt(questions)
      .then(answers => {
        r(answers);
      })
      .catch(err => {
        e(err);
      });
  });
};
