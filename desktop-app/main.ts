import { ElectronService } from './service/electron.service';
import { ApiService } from './service/api.service';
import { Constants } from './service/util/constants';
import * as url from 'url';
import * as path from 'path';

ElectronService.appInit(url.format({
    pathname: path.join(ElectronService.application.getAppPath(), 'desktop-app', 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true
})); 

ApiService.config(Constants.DEFAULT_API_PORT);