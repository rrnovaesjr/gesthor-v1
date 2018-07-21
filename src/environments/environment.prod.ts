export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080',
  auth:   {
    clientID: 'D0zEEiNCXv25UyNCfGJ1YlUohbp6XG1M',
    domain: 'rrnovaesjr.auth0.com',
    audience: 'http://localhost:8080',
    redirect: 'http://localhost:9000/callback',
    scope: 'openid profile email read:users'
  }
};
