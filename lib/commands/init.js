const config = require('../config');
const utils = require('../utils');

const promptObj = {
  message: 'Select a template',
  type: 'rawlist',
  name: 'type',
  default: '1',
  choices: config.templatesList
};

async function init() {
  let answers = await utils.prompt(promptObj);
  console.log(`开始安装${answers.type}...`);
  await utils.copySync(path.resolve(__dirname, '../packages/sjj-template-test'), process.cwd());
  console.log(`安装完成`);
}

module.exports = init;
