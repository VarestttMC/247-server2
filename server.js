const net = require("net");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("MC pinger is running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Web server running");
});

// ping loop
setInterval(() => {
  const socket = new net.Socket();

  socket.connect(25565, "orbitlaunchpad.xyz", () => {
    console.log("Pinged server");
    socket.destroy();
  });

  socket.on("error", () => {});
}, 300000);
