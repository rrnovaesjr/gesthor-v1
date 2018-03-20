export const environment = {
  production: true,
  databaseConfig: {
    host: 'localhost',
    user: 'root',
    database: 'gesthor_prod',
    password: '1234'
  },
  auth:   {
    clientID: 'D0zEEiNCXv25UyNCfGJ1YlUohbp6XG1M',
    domain: 'rrnovaesjr.auth0.com',
    audience: 'http://localhost:8080',
    redirect: 'http://localhost:8080/callback',
    scope: 'openid profile email'
  }
};
