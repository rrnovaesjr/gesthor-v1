const { app, BrowserWindow } = require('electron')
const { api } = require('./resources/api');

/** 
 * Referência para a janela principal.
*/
let win;

/**
 * Configura a API para a aplicação.
 */
api.config(process.argv[2]);

/** 
 * Função que inicializa a janela principal. Atribui as dimensões, a cor de fundo e o ícone do programa.
 * Também estabelece qual o arquivo que deve ser instanciado como tela principal, além de ações de fechamento
 * e outros. Para esta aplicação, maximiza-se a janela e retira-se o menu padrão.
*/
function createWindow () {
  win = new BrowserWindow({
    width: 800, 
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/img/logo_32.ico`
  })
  win.loadURL(`file://${__dirname}/dist/index.html`)
  win.on('closed', function() {
    win = null
  })
  win.setMenu(null);
  win.maximize();
}

/**
 * Medidas padrões para quando o aplicação está pronta.
 * 
 * Configura-se a API e cria-se a janela principal.
 */
app.on('ready', createWindow);

/**
 * Medidas quando todas as janelas são fechadas. Encerra-se a aplicação.
 */
app.on('window-all-closed', function() {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

/**
 * Medidas quando a aplicação está ativada.
 */
app.on('activate', function() {
  if(win === null) {
    createWindow();
  }
})