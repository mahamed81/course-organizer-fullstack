/**
 * This file contains auto-generated code from the Auth0 website to allow authentication from
 * their servers.  
 */

import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'augsburgbrandon.auth0.com',
    clientID: 'NkJfTB2qohLPCPOJu6rYYoQJgSJRsbiv',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}