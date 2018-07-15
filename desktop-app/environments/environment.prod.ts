export const environment = {
  production: true,
  databaseConfig: {
    host: 'localhost',
    user: 'root',
    database: 'gesthor',
    password: 'justicem3lonl13sonep1ece'
  },
  auth: {
    secret: {
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://rrnovaesjr.auth0.com/.well-known/jwks.json"
    },
    audience: 'http://localhost:8080',
    issuer: 'https://rrnovaesjr.auth0.com/',
    algorithms: ['RS256']
  },
  serverConfig: {
    bodyParser: {
      json: {
        limit: '50mb'
      },
      urlencoded: {
        extended: true
      },
      static: 'public'
    }
  }
};
