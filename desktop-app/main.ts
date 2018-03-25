import { electronService } from './service/electron.service';
import { apiService } from './service/api.service';
import { Constants } from './service/util/constants';
import * as url from 'url';
import * as path from 'path';
import { appService } from './service/app.service';

appService.config(Constants.DEFAULT_APP_PORT);

electronService.appInit(url.format({
    pathname: path.join(`localhost:${Constants.DEFAULT_APP_PORT}`),
    protocol: 'http:',
    slashes: true
})); 

apiService.config(Constants.DEFAULT_API_PORT);