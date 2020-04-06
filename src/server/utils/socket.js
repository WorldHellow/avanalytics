var fromClient = function (io) {
  io.sockets.on("err", function () {
    console.log("hello world im a hot socket Error");
  });

  io.on("connection", function (socket) {
    console.info(`Client connected to client [id=${socket.id}]`);

    socket.on("VideoPlayTrigger", function (data) {
      socket.broadcast.emit("FacialRecognitionCall", data);
      socket.broadcast.emit("TickerRecognitionCall", data);
      socket.broadcast.emit("SpeechRecognitionCall", data);
      console.log("Video play trigger: ", data);
    });

    socket.on("VideoStopTrigger", function (data) {
      socket.broadcast.emit("FacialRecognitionTerminate");
      socket.broadcast.emit("TickerRecognitionTerminate");
      socket.broadcast.emit("SpeechRecognitionTerminate");
      console.log("Video stop trigger called!");
    });

    socket.on("FacialRecognitionData", function (data) {
      console.log("Here I am ");
      socket.broadcast.emit("FacialRecognitionClient", data);
      console.log("Facial Recognition data dump: ", data);
    });

    socket.on("SpeechRecognitionData", function (data) {
      socket.broadcast.emit("SpeechRecognitionClient", data);
      console.log("Speech Recognition data dump: ", data);
    });

    socket.on("TickerRecognitionData", function (data) {
      socket.broadcast.emit("TickerRecognitionClient", data);
      console.log("Ticker Recognition data dump: ", data);
    });

    socket.on("disconnect", () => console.log("Client disconnected"));
  });
};

var fromModuleClient = function (io) {
  io.sockets.on("err", function () {
    console.log("hello world im a hot socket Error");
  });

  io.on("connection", function (socket) {
    console.info(`Client connected to module [id=${socket.id}]`);

    socket.on("FacialRecognitionData", function (data) {
      console.log("Here I am in module");
      socket.broadcast.emit("FacialRecognitionClient", data);
      console.log("Facial Recognition data dump: ", data);
    });

    socket.on("SpeechRecognitionData", function (data) {
      socket.broadcast.emit("SpeechRecognitionClient", data);
      console.log("Speech Recognition data dump: ", data);
    });

    socket.on("TickerRecognitionData", function (data) {
      socket.broadcast.emit("TickerRecognitionClient", data);
      console.log("Ticker Recognition data dump: ", data);
    });

    socket.on("disconnect", () => console.log("Client disconnected"));
  });
};

exports.fromClient = fromClient;
exports.fromModuleClient = fromModuleClient;
