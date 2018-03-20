var { app, BrowserWindow } = require('electron')
var { api } = require('./resource/api');

/** 
 * Referência para a janela principal.
*/
var win;

/**
 * Configura a API para a aplicação.
 */
api.config(__dirname + '/../dist', process.argv[2]);

/** 
 * Função que inicializa a janela principal. Atribui as dimensões, a cor de fundo e o ícone do programa.
 * Também estabelece qual o arquivo que deve ser instanciado como tela principal, além de ações de fechamento
 * e outros. Para esta aplicação, maximiza-se a janela e retira-se o menu padrão.
*/
function createWindow() {
  win = new BrowserWindow({
    width: 800, 
    height: 600,
    backgroundColor: '#ffffff',
    icon: `http://localhost:8080/assets/logo_32.ico`
  });
  win.setMenu(null);
  win.maximize();
  win.loadURL(`http://localhost:8080`)
  win.on('closed', function() {
    win = null
  })

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

module.exports = [
  win
]