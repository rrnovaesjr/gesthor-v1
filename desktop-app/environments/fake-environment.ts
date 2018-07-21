// Use this fale as a base to build your own environment variables.
// This is not an official file.
// Make sure that these files have name environment.prod.ts and environment.ts 
// (for dev mode).

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
      host: '****',
      user: '****',
      database: '****',
      password: '****'
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
        period: 0
      },
      secret: {
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "****"
      },
      optionsBody: {
        client_secret: '****',
        client_id: '****',
        grant_type: '****',
        audience: '****'
      },
      apiUrl: '****',
      audience: '****',
      issuer: "****",
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
  