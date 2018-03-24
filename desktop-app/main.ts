import { ElectronService } from './service/electron.service';
import * as url from 'url';
import * as path from 'path';

ElectronService.appInit(url.format({
    pathname: path.join(ElectronService.application.getAppPath(), 'desktop-app', 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true
})); 