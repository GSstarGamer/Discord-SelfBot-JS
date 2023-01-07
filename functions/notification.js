const notifier = require('node-notifier');
const fs = require('fs');


module.exports = function notify(text) {
  notifier.notify(
    {
      title: 'Self bot',
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