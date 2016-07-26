const config = require('../config');
const pushbullet = require('./pushbullet');
const client = new pushbullet.PushbulletClient();

console.log("\nStarting the Pushbullet client!");


// Parses the arguments and sets requirements
var argv = require('yargs')
  .usage('Trying to send a message?\nUsage: $0 -p <phone number> -m <message>')
  .alias('p', 'phone')
  .describe('p', 'Send to phone number')
  .alias('m', 'message')
  .describe('m', 'Send this message')
  .demand(['p', 'm'])
  .help('h')
  .alias('h', 'help')
  .example('$0 -p "335 596 2234" -m "Hey!"')
  .epilog('Johan Oakes 2016 - Pushbullet')
  .argv;

/*
* Pushbullet client makes a request for user data
* TODO: Set this to a string variable so we can pass it to pushSMS
*/
client.getUserIdentity(function (err, data) {
  var pushSMS = {
    "push": {
      "conversation_iden": "+1 " + argv.p,
      "message": argv.m,
      "package_name": "com.pushbullet.android",
      "source_user_iden": data['iden'],
      "target_device_iden": config.auth.target_device_iden,
      "type": "messaging_extension_reply"
    },
    "type": "push"
  };

  client.sendSMS(pushSMS, console.log("Message sent successfully!"));
});

/*
* Pushbullet client requests list of chats
*/
// client.getDevicesList(() => console.dir(data));

// Object that holds data in order to push SMS from
// Pushbullet API
// var pushSMS = {
//   "push": {
//     "conversation_iden": "+1 " + argv.p,
//     "message": argv.m,
//     "package_name": "com.pushbullet.android",
//     "source_user_iden": config.auth.source_user_iden,
//     "target_device_iden": config.auth.target_device_iden,
//     "type": "messaging_extension_reply"
//   },
//   "type": "push"
// };

/*
* Send out a SMS
* @param {Object} pushSMS JSON object that holds info to send SMS
* @param {Function} callback sends success message
*/
// client.sendSMS(pushSMS, console.log("Message sent succesfully!"));
