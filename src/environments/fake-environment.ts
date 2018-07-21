// Use this fale as a base to build your own environment variables.
// This is not an official file.
// Make sure that these files have name environment.prod.ts and environment.ts 
// (for dev mode).

export const environment = {
    production: false,
    /**
     * Insert here your API URL.
     */
    apiUrl: '****',
    /**
     * Insert here your auth configuration to the Auth0 library.
     */
    auth:   {
      clientID: '****',
      domain: '****',
      audience: '****',
      redirect: '****',
      scope: '****'
    },
  };
  