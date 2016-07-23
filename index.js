const pushbullet = require('./pushbullet');
const client = new pushbullet.PushbulletClient();

console.log("Starting the Pushbullet client!");

/*
* Pushbullet client makes a request for user data
*/
// client.getUser(() => console.dir(data));

/*
* Pushbullet client requests list of chats
*/
// client.getDevicesList(() => console.dir(data));

// Object that holds data in order to push SMS from
// Pushbullet API
var pushSMS = {
  "push": {
    "conversation_iden": "+1 336 596 9718",
    "message": "Test 1, 2, 3!",
    "package_name": "com.pushbullet.android",
    "source_user_iden": "ujyYKqvyziC",
    "target_device_iden": "ujyYKqvyziCsjAsoeMFET6",
    "type": "messaging_extension_reply"
  },
  "type": "push"
}

/*
* TODO: Develop a function that takes command line arguments
* and adds them to pushSMS
*/


/*
* Send out a SMS
*/
client.sendSMS(pushSMS, console.log("Message sent succesfully!"));
