const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      frame: false,
    },
  });
  win.loadFile(
    path.join(__dirname, "../../dist/breadboard/browser/index.html")
  );
  Menu.setApplicationMenu(null);
};

app.whenReady().then(() => {
  createWindow();
});
