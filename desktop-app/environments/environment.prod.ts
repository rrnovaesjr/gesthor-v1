export const environment = {
  production: true,
  databaseConfig: {
    host: 'localhost',
    user: 'root',
    database: 'gesthor',
    password: 'justicem3lonl13sonep1ece'
  },
  auth: {
    apiManagementTokenRequestConfig: {
      initialDelay: 0,
      period: 84400000
    },
    secret: {
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://rrnovaesjr.auth0.com/.well-known/jwks.json"
    },
    optionsBody: {
      client_secret: 'r6JmjUgiEppyN8P6O1dzJpI9wysh2UqHgm639H4E1QXMgtluBSOO1FexlUAbmbOl',
      client_id: 'fJUfe_XmjbfVEw7J8QCtXvIUqlJbYm_K',
      grant_type: 'client_credentials'
    },
    apiUrl: 'https://rrnovaesjr.auth0.com/oauth/token',
    audience: 'http://localhost:8080',
    issuer: 'https://rrnovaesjr.auth0.com',
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
