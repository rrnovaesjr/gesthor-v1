import { electronService } from './service/electron.service';
import { apiService } from './service/api.service';
import { Constants } from './service/util/constants';
import * as url from 'url';
import * as path from 'path';

electronService.appInit(url.format({
    pathname: path.join(electronService.application.getAppPath(), 'desktop-app', 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true
})); 

apiService.config(Constants.DEFAULT_API_PORT);