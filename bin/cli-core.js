const path = require('path');
const commands = require('require-all')({
  dirname: path.resolve(__dirname, '../lib/commands')
});
const config = require('../lib/config');
const cmd = process.argv[process.argv.length - 1];

module.exports = {
  start: async () => {
    if (commands[cmd]) {
      commands[cmd]();
    } else {
      console.log(`Invalid command: ${cmd}`);
    }
  }
};
