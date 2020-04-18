const electron = require("electron");
const uuid = require("uuid");
const {app, BrowserWindow, Menu, ipcMain} = electron;

let todayWindow;
let createWindow;
let listWindow;

let allAppointment = [];

app.on("ready", () => {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true 
        },
        width: 700,
        height: 800,
        title: "Menghitung Luas Bangun datar dan Bangun ruang"
    });
    todayWindow.loadURL(`file://${__dirname}/BangunRuang/BangunRuang.html`);
    todayWindow.on("closed", () => {

        app.quit();
        todayWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

const aboutWindowCreator = () => {
    aboutWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        },
        width : 600,
        height : 400,
        title: "My Profile"
    });
    aboutWindow.setMenu(null);
    aboutWindow.loadURL(`file://${__dirname}/pages/about.html`);
    aboutWindow.on("closed",() => (aboutWindow = null));
};


const menuTemplate = [
{
    label: "Profile",
        click(){
            aboutWindowCreator();
        }
}


]
