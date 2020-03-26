const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.get("/", (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

const modulesServer = app.listen(process.env.MODULES_PORT || 8909, () =>
  console.log(`Listening to modules on port ${process.env.PORT || 8909}!`)
);

const io = require("socket.io")(modulesServer);

io.on("connection", function(socket) {
  console.info(`Client connected [id=${socket.id}]`);

  socket.on("FacialRecognition", function(data) {
    socket.broadcast.emit("FacialRecognitionData", data);
    console.log("Facial Recognition data dump: ", data);
  });

  socket.on("SpeechRecognition", function(data) {
    console.log("Speech Recognition data dump: ", data);
  });

  socket.on("TickerRecognition", function(data) {
    console.log("Ticker Recognition data dump: ", data);
  });

  socket.on("disconnect", () => console.log("Client disconnected"));
});
