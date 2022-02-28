import { UserManager, WebStorageStateStore } from 'oidc-client'
const AUTH0_DOMAIN = 'http://62.108.57.218:8086/auth/realms/delivery'
const settings = {
  userStore: new WebStorageStateStore({ store: window.sessionStorage }),
  authority: AUTH0_DOMAIN,
  client_id: 'delivery',
  client_secret:'af71c724-8602-49ad-8125-7d96a5ea4e5d',
  redirect_uri: window.location.origin + '/callback.html',
  post_logout_redirect_uri: window.location.origin,
  silent_redirect_uri: window.location.origin + '/silent-renew.html',
  response_type: 'code',
  scopes: 'openid profile roles',
  automaticSilentRenew: true,
  loadUserInfo:true,
  filterProtocolClaims:true,
}

let userManager = new UserManager(settings)
class AuthService {
  login () {
    return userManager.signinRedirect()
  }

  logout () {
    userManager.signoutRedirect()
      .then(() => console.log('User logged out'))
      .catch(error => console.log(error))
  }

  getUser () {
    return new Promise((resolve, reject) => {
      userManager.getUser().then(function (user) {    
          return resolve(user)
      }).catch(function (err) {
        console.log(err)
        return reject(err)
      });
    })
  }
}
export const authService = new AuthService()