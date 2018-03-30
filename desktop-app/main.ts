import { apiService } from './service/api.service';
import { appService } from './service/app.service';
import { electronService } from './service/electron.service';
import { Constants } from './service/util/constants';
import * as url from 'url';
import * as path from 'path';

apiService.config(Constants.DEFAULT_API_PORT);
appService.config(Constants.DEFAULT_APP_PORT);

electronService.appInit(url.format({
    pathname: path.join(`localhost:${Constants.DEFAULT_APP_PORT}`),
    protocol: 'http:',
    slashes: true
})); 