'use strict';

const config = require('../config');
const pushbullet = require('./pushbullet');
const client = new pushbullet.PushbulletClient();

console.log('\nStarting the Pushbullet client!');

// Parses the arguments and sets requirements
var argv = require('yargs')
  .usage('Trying to send a message?\nUsage: $0 -p <phone number> -m <message>')
  .alias('p', 'phone')
  .describe('p', 'Send to phone number')
  .alias('m', 'message')
  .describe('m', 'Send this message')
  // .demand(['p', 'm'])
  .alias('d', 'devices')
  .describe('d', 'List device information in JSON')
  .help('h')
  .alias('h', 'help')
  .example('$0 -p "335 596 2234" -m "Hey!"')
  .epilog('Johan Oakes 2016 - Pushbullet')
  .argv;

/*
 * Pushbullet client requests list of chats
 */
if (argv.d) {
  console.log('Devices:\n');
  client.getDevicesList((err, data) => console.dir(data['devices']));
}


/*
* Pushbullet client makes a request for user data and
* passes the data to a callback function that initiates SMS
*/
if (argv.p && argv.m) {
  client.getUserIdentity(function (err, data) {
    // Object that holds data so that Pushbullet
    // knows how to configure the SMS
    if (!err) {
      var pushSMS = {
        'push': {
          'conversation_iden': `+1  ${argv.p}`,
          'message': argv.m,
          'package_name': 'com.pushbullet.android',
          'source_user_iden': data['iden'],
          'target_device_iden': config.auth.target_device_iden,
          'type': 'messaging_extension_reply'
        },
        'type': 'push'
      };

      /*
       * Send out a SMS
       * @param {Object} pushSMS JSON object that holds info to send SMS
       * @param {Function} callback sends success message
       */
      client.sendSMS(pushSMS, console.log('Message sent successfully!\n'));
    } else console.error(err);
  });
}
