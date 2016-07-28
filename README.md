# PushConsole
#### Send text messages from a registered device to any number using the Pushbullet API so that you don't have to break flow from using the command line. 

[![Known Vulnerabilities](https://snyk.io/test/github/oakejp12/pushconsole/badge.svg)](https://snyk.io/test/github/oakejp12/pushconsole)

### Use

![Use](https://github.com/oakejp12/PushConsole/blob/master/PushConsoleEx.PNG)


Clone the repository: `git clone https://github.com/oakejp12/PushConsole.git`

Run NPM: `npm install`

Send a message to (555) 555-5555 (do not put special characters in number):
`node src/index.js -m "555 555 5555" -m "Hey, what's up?!"`

### Configuration
- [ ] Establish an account on Pushbullet and register a device.
- [ ] Make a `config.js` file in parent directory.
- [ ] Retrieve access token from account settings.
- [ ] Retrieve target device identity.

Template for config.js file:
```
module.exports = {
  "auth" : {
    "access_token" : "<your-access-token>",
    "target_device_iden": "<target-device-sending-message>"
  }
}
```

The `target_device_iden` (device sending out the messages) can be found by `curl --header 'Access-Token: <your-token>' https://api.pushbullet.com/v2/devices`. You'll receive a JSON response with a list of devices that are signed up to use Pushbullet. Select one of the device's identities as your target device. 

