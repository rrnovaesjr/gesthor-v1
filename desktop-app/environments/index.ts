import { Constants } from '../service/util/constants';

let _environment = null;
let _mode: string = process.argv[2];

if(_mode == Constants.ENVIRONMENT_PROD) {
    _environment = require('./environment.prod');
}
else {
    _environment = require('./environment');
}

export const environment = _environment;