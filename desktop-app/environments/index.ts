import { Constants } from '../service/util/constants';

let _environment = null;
let _mode: string = process.argv[2] ? process.argv[2] : Constants.ENVIRONMENT_DEV;

if(_mode == Constants.ENVIRONMENT_PROD) {
    _environment = require('./environment.prod').environment;
}
else {
    _environment = require('./environment').environment;
}

export const environment = _environment;