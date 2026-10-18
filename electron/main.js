const { app, BrowserWindow, ipcMain, net, Menu, shell } = require("electron");
const path = require("path");

if (!app.requestSingleInstanceLock()) { app.quit(); }

function createWindow() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({
    width: 1280, height: 860, backgroundColor: "#0a0e27", autoHideMenuBar: true,
    icon: path.join(__dirname, "..", "build", "icon.png"),
    webPreferences: { preload: path.join(__dirname, "preload.js"), contextIsolation: true, nodeIntegration: false }
  });
  w.loadFile(path.join(__dirname, "..", "www", "index.html"));
  w.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/i.test(url)) { shell.openExternal(url); return { action: "deny" }; }
    return { action: "allow" };
  });
}

ipcMain.handle("fetch-text", async (_e, url) => {
  if (!/^https:\/\/www\.tcmb\.gov\.tr\//.test(String(url))) throw new Error("izin yok");
  const r = await net.fetch(url);
  return { status: r.status, text: await r.text() };
});

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
