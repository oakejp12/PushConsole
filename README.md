# PushConsole
##### A repo to hopefully mess around with the Pushbullet API

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
    "access_token" : "o.mO5JTOjR7g3ztyTdcHE9KVQiUAJoOfQk",
    "source_user_iden": "ujyYKqvyziC",
    "target_device_iden": "ujyYKqvyziCsjAsoeMFET6"
  }
}
```
