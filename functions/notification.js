const notifier = require('node-notifier');
const config = require('../config.json')
const fs = require('fs');


module.exports = function notify(text) {
  notifier.notify(
    {
      title: config['SelfBot Name'],
      subtitle: 'You got an message from you bot',
      message: text,
      icon: fs.readFileSync('assets/logo.png'),
      wait: false
    },
    function (error, response, metadata) {
      return response
    }
  );
}