const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
  win.loadFile('src/index.html')
}

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
      mainWindow.webContents.openDevTools();
    })
  })