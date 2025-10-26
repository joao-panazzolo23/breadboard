const path = require("path");

const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  console.log(
    "filho da putafilho da putafilho da putafilho da putafilho da putafilho da putafilho da putafilho da puta"
  );
  win.loadFile(
    path.join(__dirname, "../../dist/breadboard/browser/index.html")
  );
};

app.whenReady().then(() => {
  createWindow();
});
