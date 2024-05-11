import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win = new BrowserWindow();
  win.loadURL("http://localhost:3000/");
};

app.whenReady().then(createWindow);