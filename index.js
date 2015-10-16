var qs = require('querystring')
var xhr = require('xhr')

module.exports = function (config) {
  var auth = {}

  auth.login = function auth_login (callback) {
    var code = auth.getCode()
    auth.getToken(code, function (err, token) {
      if (err) return callback(err)
      auth.getProfile(token, callback)
    })
  }

  auth.getCode = function auth_getCode () {
    var query = window.location.href.split('?')[1]
    return qs.parse(query).code
  }

  auth.getToken = function auth_getToken (code, callback) {
    var options = {
      url: config.githubSecretKeeper + '/' + config.githubClientId + '/' + code,
      json: true
    }

    xhr(options, function (err, res, body) {
      if (err) return callback(err)
      callback(null, body.access_token)
    })
  }

  auth.getProfile = function auth_getProfile (token, callback) {
    var options = {
      url: 'https://api.github.com/user',
      headers: { authorization: 'token ' + token },
      json: true
    }

    xhr(options, function (err, res, body) {
      if (err) return callback(err)
      callback(null, body, token)
    })
  }

  return auth
}
