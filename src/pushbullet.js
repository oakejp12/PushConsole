/*
* @author Johan Oakes
* Application to send message from phone by way of console
*/
const PUSHBULLET_API =  'https://api.pushbullet.com/v2/';
const request = require('request');
const config = require('../config');

/*
* Constructs a new instance of the Pushbullet Client
* @constructor
* @this {Pushbullet Client}
*/
function PushbulletClient() {
  const _this = this;

  // The current profile's user id
  _this.userID = null;

  /*
  * Helper for getting the request object
  * @param path {String} path the relative URI path
  * @param data {Object} data an object of extra values
  */
  var getRequestOptions = function(path, data) {
    var options = {
      url: PUSHBULLET_API + path,
      json: data
    };

    var headers = {
      'Access-Token' : config.auth.access_token
    };

    options.headers = headers;

    return options;
  };

  /*
  * Issues a GET request to the Pushbullet API
  * @param {String} path the relative URI path
  * @param {String} method GET, POST, PUT, etc.
  * @param {Object} data an object of extra values
  * @param {Function} callback the callback to invoke when the req completes
  */
  var bulletMethod = function(path, method, data, callback) {
    var opts = getRequestOptions(path, data);
    opts.method = method;
    request(opts, callback);
  };

  /*
  * Helper for transforming the request callback values
  * @param {Function} callback the callback to invoke when req completes
  */
  var makeBulletCallback = function(callback) {
    return function(err, res, body) {
      var data = null;

      if(!err) {
        if (typeof body === "string") {
          try {
            data = JSON.parse(body);
          } catch (err) {
            return console.error(err);
          }
        } else if (typeof body === "object") data = body;
      } else {
        console.log("Error in trying to parse data in callback function");
      }
      if (callback) {
        callback(err, data);
      }
    };
  };


  /*
  * Gets the current users
  * @param {Object} data"
  * @param {Function} callback
  */
  _this.getUserIdentity = function(data) {
    bulletMethod('users/me', 'GET', data, makeBulletCallback((err, data) =>
      console.log(`Your user identity: ${data['iden']}`)
    ));
  };

  /*
  * Get a list of chats belonging to the current user
  * @param {Object} data
  * @param {Function} callback callback to invoke when req completes
  * TODO: Revise callback
  */
  _this.getDevicesList = function(data, callback) {
    bulletMethod('devices', 'GET',data, makeBulletCallback(callback));
  };

  /*
  * Send out an SMS
  */
  _this.sendSMS = function(data, callback) {
    bulletMethod('ephemerals', 'POST', data, makeBulletCallback(callback));
  };
}

exports.PushbulletClient = PushbulletClient;
