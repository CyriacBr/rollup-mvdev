const { spawn, exec } = require('child_process');
const path = require('path');
const notifier = require('node-notifier');
let config = require('../config/mv.config');

function copy(source, dest) {
  return new Promise((resolve, reject) => {
    exec(`cp -a ${source}/. ${dest}`, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

(async function() {
  if (config.copy && config.copy.dest) {
    console.log('-----------------------------------------');
    try {
      let source = path.join(__dirname, '/../dist');
      await copy(source, config.copy.dest);
      console.log(`Build files copied to ${config.copy.dest}`);
      notifier.notify({
        title: config.title,
        message: 'Built & copied to MV project',
        icon: path.join(__dirname, 'mv.png')
      });
    } catch (error) {
      notifier.notify({
        title: '[ERROR] ' + config.title,
        message: 'File built but could not copy',
        icon: path.join(__dirname, 'mv.png')
      });
      console.log(`Failed to copy file(s)`);
      console.log('error :', error);
    }
  } else {
    notifier.notify({
      title: config.title,
      message: 'Built!',
      icon: path.join(__dirname, 'mv.png')
    });
  }
})();
