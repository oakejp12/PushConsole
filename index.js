const pushbullet = require('./pushbullet');
const client = new pushbullet.PushbulletClient();

console.log("Starting the Pushbullet client!");

client.getUser(function() {
  console.log(data);
});
