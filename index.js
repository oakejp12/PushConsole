const pushbullet = require('./pushbullet');
const client = new pushbullet.PushbulletClient();

console.log("Starting the Pushbullet client!");

/*
* Pushbullet client makes a request for user data
*/
client.getUser(() => console.dir(data));
