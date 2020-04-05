import socketIOClient from "socket.io-client";

const socket = socketIOClient(process.env.REACT_APP_MODULES_SOCKET_URL);

export default socket;
