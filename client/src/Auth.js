/**
 * This file contains auto-generated code from the Auth0 website to allow authentication from
 * their servers.
 */

import auth0 from 'auth0-js';
import history from './components/history';

export default class Auth {
  auth0 = new auth0.WebAuth({
  domain: 'erikchan.auth0.com',
  clientID: 'dUTnMkjzGiMK3scYsUn_eeddtj5CJSA1',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
  });

  userProfile;

  getAccessToken = () => {
    const accessToken = localStorage.getItem('access_token');
    if(!accessToken) {
      throw new Error('No Access Token ')
    }
  }

  getProfile = cb => {

  }


  login = () => {
    this.auth0.authorize();
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

  setSession = (authResult) => {
    // Set the time the Access Tolken will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // Navigate to the home route
    history.replace('/home');
  }

  logout = () => {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
