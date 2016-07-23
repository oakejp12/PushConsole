const pushbullet = require('./pushbullet');
const client = new pushbullet.PushbulletClient();

console.log("Starting the Pushbullet client!");


client.getUser(() => console.dir(data));
