import { AUTHENTICATE } from '../constant/EndPoint';
import { client_id, client_secret } from '../constant/Variables';
import { encode } from 'base-64';

export const login = async (input) => {
  var username = input.username
  var password = input.password
  let res = null;
  try {
    var url = AUTHENTICATE
    var params = {
      client_id: client_id,
      client_secret: client_secret,
      grant_type: 'password',
      username: username,
      password: password,
      scope: 'read write',
    };
    var formBody = [];
    for (var key in params) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(params[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    var request = {
      cache: 'no-cache',
      mode: 'cors',
      withCredentials: true,
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + encode(client_id + ':' + client_secret),
      },
      body: formBody,
    };
    
    await fetch(url, request)
      .then(response => response.json())
      .then(result => res = result)
      .catch(error => res = error);

  } catch (ex) {
    res = {
      code: 'Exception found'
    }
  } finally {
    return res;
  }
}

