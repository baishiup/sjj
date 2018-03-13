const fs = require('fs-extra');

module.exports = function copy(src, dest) {
  return new Promise((r, e) => {
    fs
      .copy(src, dest)
      .then(() => {
        r();
      })
      .catch(err => {
        e(err);
      });
  });
};
