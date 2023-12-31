import { app, BrowserWindow } from 'electron'
import { join } from 'node:path'
import isDev from 'electron-is-dev'

app.whenReady().then(() => {
  const win = new BrowserWindow({
    title: 'Main window',
    width: 1000,
    height: 860,
    minWidth: 700,
    minHeight: 700,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: join(__dirname, '../preload/index.js'),
    },
  })

  isDev
    ? win.loadURL('http://localhost:3001/')
    : win.loadFile(join(__dirname, '../../dist-renderer/index.html'))

  isDev && win.webContents.openDevTools()
})
