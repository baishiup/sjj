const fs = require('fs-extra');
const utils = require('../lib/utils');
const path = require('path');

const templateArr = ['test', 'doc', 'vue', 'react', 'not build front', 'node'];

let promptObj = {
  message: 'Select a template',
  type: 'rawlist',
  name: 'type',
  default: '1',
  choices: templateArr
};

module.exports = {
  start: async () => {
    let answers = await utils.prompt(promptObj);
    console.log(answers, `开始安装${answers}...`);
    console.log(path.resolve(__dirname, '../packages/sjj-template-test'), path.resolve(__dirname, '/tmp'));
    await fs.copySync(path.resolve(__dirname, '../packages/sjj-template-test'), process.cwd());
  }
};
