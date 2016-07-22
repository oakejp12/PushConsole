/*
* @author Johan Oakes
* Application to send message from phone by way of console
*/

const PUSHBULLET_API =  'https://api.pushbullet.com/v2/';
const request = require('request');
const config = require('./config');

/*
* Constructs a new instance of the Pushbullet Client

* @constructor
* @this {Pushbullet Client}
*/
function PushbulletClient() {
  var _this = this;

  // The current profile's user id
  this.userID = null;

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
    }

    options.headers = headers;

    return options;
  };

  /*
  * Issues a GET request to the Pushbullet API
  * @param {String} path the relative URI path
  * @param {Object} data an object of extra values
  * @param {Function} callback the callback to invoke when the req completes
  */
  var tinderGet = function(path, data, callback) {
    var opts = getRequestOptions(path, data);
    opts.method = 'GET';
    request(opts, callback);
  };

  /*
  * Helper for transforming the request callback values
  * @param {Function} callback the callback to invoke when req completes
  */
  var makeTinderCallback = function(callback) {
    return function(err, res, body) {
      var data = null;

      if(!err) {
        if (typeof body === "string") {
          try {
            data = JSON.parse(body);
          } catch (err) {
            // TODO : Catch the error
          }
        } else if (typeof body === "object") data = body;
      }
      if (callback) {
        callback(err, data);
      }
    };
  };


  /*
  * Gets the current users
  *
  *
  */
  _this.getUser = function(data, callback) {
    tinderGet('users/me', console.dir(data));
  };

};

exports.PushbulletClient = PushbulletClient;
