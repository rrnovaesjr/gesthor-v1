export const environment = {
    production: false,
    databaseConfig: {
      host: 'localhost',
      user: 'root',
      database: 'gesthor_dev',
      password: '123456'
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
  