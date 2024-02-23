const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({show: false,autoHideMenuBar:true});
      win.maximize();
      win.show();
      
  
  win.loadFile('login.html')
}

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
      mainWindow.webContents.openDevTools();
    })
  })