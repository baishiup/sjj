const path = require('path');
const allUtils = require('require-all')({
  dirname: path.resolve(__dirname, './')
});

module.exports = {
  copy: allUtils.copy,
  prompt: allUtils.prompt
};
