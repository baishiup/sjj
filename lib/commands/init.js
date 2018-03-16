const config = require('../config');
const utils = require('../utils');
const path = require('path');

const promptObj = {
  message: 'Select a template',
  type: 'rawlist',
  name: 'type',
  default: '1',
  choices: config.templatesList
};

async function init() {
  // questions
  let answers = await utils.prompt(promptObj);
  console.log(`开始安装${answers.type}...`);

  // copy template dir file to work path
  await utils.copy(path.resolve(__dirname, `../../packages/sjj-template-${answers.type}`), process.cwd() + '/tmp');
  console.log(`安装完成`);
}

module.exports = init;
