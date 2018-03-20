// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  databaseConfig: {
    host: 'localhost',
    user: 'root',
    database: 'gesthor_dev',
    password: '1234'
  },
  firebaseConfig: {
    apiKey: "AIzaSyC4--Q9e5R33cyX3MhtJ07pKfI89LY2Jbc",
    authDomain: "gesthor-v1-dev.firebaseapp.com",
    databaseURL: "https://gesthor-v1-dev.firebaseio.com",
    projectId: "gesthor-v1-dev",
    storageBucket: "gesthor-v1-dev.appspot.com",
    messagingSenderId: "619892409617"
  }
};
