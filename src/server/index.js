const express = require("express");
const os = require("os");
var cors = require("cors");
var fs = require("fs");

const app = express();
app.use(cors());

app.use(express.static("dist"));
app.use("/public", express.static("public"));

/* OS Username GET api */
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

/* Videos GET api */
app.get("/api/videos", (req, res) =>
  res.send({
    videos: [
      {
        videoId: 1,
        publishedAt: "2017-09-09T23:38:21.000Z",
        title: "ARY News - Part 01",
        description: "1st part of an ARY News Broadcast clip.",
        thumbnails: {
          default: {
            url: "videos/thumbnails/001.png"
          },
          medium: {},
          high: {}
        },
        url: "videos/001.mp4"
      },
      {
        videoId: 2,
        publishedAt: "2017-09-09T23:38:21.000Z",
        title: "ARY News - Part 02",
        description: "2nd part of an ARY News Broadcast clip.",
        thumbnails: {
          default: {
            url: "videos/thumbnails/002.png"
          },
          medium: {},
          high: {}
        },
        url: "videos/002.mp4"
      },
      {
        videoId: 3,
        publishedAt: "2017-09-09T23:38:21.000Z",
        title: "ARY News - Part 03",
        description: "3rd part of an ARY News Broadcast clip.",
        thumbnails: {
          default: {
            url: "videos/thumbnails/003.png"
          },
          medium: {},
          high: {}
        },
        url: "videos/003.mp4"
      },
      {
        videoId: 4,
        publishedAt: "2017-09-09T23:38:21.000Z",
        title: "ARY News - Part 04",
        description: "4th part of an ARY News Broadcast clip.",
        thumbnails: {
          default: {
            url: "videos/thumbnails/004.png"
          },
          medium: {},
          high: {}
        },
        url: "videos/004.mp4"
      }
    ]
  })
);

/* Labels GET api */
app.get("/api/celebrities", (req, res) => {
  fs.readFile("public/celebrities/labels.json", "utf8", function(err, data) {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

/* Socket Connections */
const modulesServer = app.listen(process.env.MODULES_PORT || 8909, () =>
  console.log(
    `Listening to modules on port ${process.env.MODULES_PORT || 8909}!`
  )
);

const io = require("socket.io")(modulesServer);
io.on("connection", function(socket) {
  console.info(`Client connected [id=${socket.id}]`);

  socket.on("VideoTrigger", function(data) {
    socket.broadcast.emit("FacialRecognitionCall", data);
    socket.broadcast.emit("TickerRecognitionCall", data);
    socket.broadcast.emit("SpeechRecognitionCall", data);
    console.log("VideoTrigger dump: ", data);
  });

  socket.on("FacialRecognitionData", function(data) {
    socket.broadcast.emit("FacialRecognitionClient", data);
    console.log("Facial Recognition data dump: ", data);
  });

  socket.on("SpeechRecognitionData", function(data) {
    console.log("Speech Recognition data dump: ", data);
  });

  socket.on("TickerRecognitionData", function(data) {
    console.log("Ticker Recognition data dump: ", data);
  });

  socket.on("disconnect", () => console.log("Client disconnected"));
});
