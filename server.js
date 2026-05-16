const net = require("net");

setInterval(() => {
    const socket = new net.Socket();

    socket.connect(25565, "orbitlaunchpad.xyz", () => {
        console.log("Pinged");
        socket.destroy();
    });

    socket.on("error", () => {});
}, 300000);
