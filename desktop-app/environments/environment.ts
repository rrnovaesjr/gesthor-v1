export const environment = {
  production: false,
  databaseConfig: {
    host: 'localhost',
    user: 'root',
    database: 'gesthor',
    password: '123456'
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
      client_secret: 'ambZUGwBwaVtWPayIWDYC8-8VLuM4OBnfdudIrJj8eiR2hTXgkn4fo5Uomb_Cmq_',
      client_id: 'qU2lqUTOij2Vsj7Timioln6nyKTzf2Id',
      grant_type: 'client_credentials',
      audience: 'https://rrnovaesjr.auth0.com/api/v2/'
    },
    apiUrl: 'https://rrnovaesjr.auth0.com/oauth/token',
    audience: 'http://localhost:8080',
    issuer: "https://rrnovaesjr.auth0.com/",
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
