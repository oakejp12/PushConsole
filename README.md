# PushConsole
##### Send text messages from a registered device to any number using the Pushbullet API

![Use](https://github.com/oakejp12/PushConsole/blob/master/PushConsoleEx.PNG)

### Use
Send a message to (555) 555-5555:
`node src/index.js -m "555 555 5555" -m "Hey, what's up?!"`

### Configuration
- [ ] Establish an account on Pushbullet and register a device.
- [ ] Make a `config.js` file in parent directory.
- [ ] Retrieve access token from account settings.
- [ ] Fill in the rest of the necessary details.

Example config.js file:
```
module.exports = {
  "auth" : {
    "access_token" : "<your-access-token>",
    "source_user_iden": "<user-identity>",
    "target_device_iden": "<target-device-sending-message>"
  }
}
```

The `source_user_iden` (your user identity) and `target_device_iden` (device sending out the messages) can both be found by `curl --header 'Access-Token: <your-token>' https://api.pushbullet.com/v2/users/me'` or `curl --header 'Access-Token: <your-token>' https://api.pushbullet.com/v2/devices'`. Choose either `me` or `devices` to receive appropriate data.

