
export const environment = {
    /**
     * Switch this flag for options that are active differently for production/development
     * environments. 
     */
    production: false,
    /**
     * An interface configuration for your database connection.
     * 
     * Set here the number of parallel connections can be opened with the database; as
     * well as the host information.
     */
    databaseConfig: {
      connectionLimit: 0,
      host: 'localhost',
      user: 'gesthor',
      database: 'gesthor',
      password: '12345678'
    },
    /**
     * Insert your Auth0 auth configurations.
     * 
     * Check out your Auth0 Management API as well as your client configurations to
     * gain the best properties for this environment.
     */
    auth: {
      apiManagementTokenRequestConfig: {
        initialDelay: 0,
        period: 5184000
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
    /**
     * Insert your servers configuration.
     */
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
  