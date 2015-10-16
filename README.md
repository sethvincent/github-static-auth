# github-static-auth

A module that handles communicating with github-secret-keeper and the GitHub api for authenticating users on static sites.

## Install

Get github-secret-keeper set up locally or on a remote server. More info here: https://github.com/HenrikJoreteg/github-secret-keeper

```
npm install --save github-static-auth
```

## Usage

```js
var githubStaticAuth = require('github-static-auth')

var auth = githubStaticAuth({
  githubSecretKeeper: 'http://127.0.0.1:5000',
  githubClientId: 'your client id'
})

auth.login(function (err, profile, token) {

})
```

### API

### `auth.login(callback)`

`callback` provides `error`, `profile`, and `token` arguments.

### `auth.getCode()`

Returns the code sent back from GitHub when initiating authentication.

### `auth.getToken(code, callback)`

Retrieves a user's access token via github-secret-keeper.

`callback` provides `error` and `token` arguments.

### `auth.getProfile(token, callback)`

Get's the user's profile using their access token.

`callback` provides `error`, `profile`, and `token` arguments.

## license
[MIT](LICENSE.md)