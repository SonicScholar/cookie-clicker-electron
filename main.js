const {app, BrowserWindow} = require('electron');

let mainWindow;
let htmlMain = "cookie-clicker-electron.html";

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1024, height: 768, webPreferences: {nodeIntegration: true, webviewTag: true} });
  mainWindow.loadURL('file://' + __dirname + '/' + htmlMain);
  mainWindow.openDevTools();
});
