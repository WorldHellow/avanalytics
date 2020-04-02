const express = require("express");
const os = require("os");
var cors = require("cors");

const app = express();
app.use(cors());

app.use(express.static("dist"));

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.get("/api/videos", (req, res) =>
  res.send({
    videos: [
      {
        videoId: 1,
        publishedAt: "2017-09-09T23:38:21.000Z",
        title:
          "Sairbeen 26 Mar 2020 - Coronavirus toll rises in USA. The latest from Sindh. & WorkingFromHome tips",
        description: "BBC URDU TV PROGRAMME SAIRBEEN",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/vXrqQ-MduZQ/sddefault.jpg"
          },
          medium: {},
          high: {}
        },
        url: "https://www.youtube.com/embed/vXrqQ-MduZQ"
      },
      {
        videoId: 2,
        publishedAt: "2017-09-09T23:38:21.000Z",
        title:
          "Sairbeen 30 Mar 2020 - Coronavirus cases rise in Pakistan, as authorities mull stricter measures.",
        description: "BBC URDU TV PROGRAMME SAIRBEEN",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/FoD045_tC6k/sddefault.jpg"
          },
          medium: {},
          high: {}
        },
        url: "https://www.youtube.com/embed/FoD045_tC6k"
      },
      {
        videoId: 3,
        publishedAt: "2017-09-09T23:38:21.000Z",
        title:
          "Sairbeen 31 March 2020: Tableegh group in India linked to Covid-19 cases",
        description: "BBC URDU TV PROGRAMME SAIRBEEN",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/YXgB_0L-g4o/sddefault.jpg"
          },
          medium: {},
          high: {}
        },
        url: "https://www.youtube.com/embed/YXgB_0L-g4o"
      }
    ]
  })
);

app.get("/", (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

const modulesServer = app.listen(process.env.MODULES_PORT || 8909, () =>
  console.log(
    `Listening to modules on port ${process.env.MODULES_PORT || 8909}!`
  )
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
