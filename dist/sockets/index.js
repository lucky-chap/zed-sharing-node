"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSocket = void 0;
const socket_io_1 = require("socket.io");
const roomSocket_1 = require("./roomSocket");
const offerSocket_1 = require("./offerSocket");
const answerSocket_1 = require("./answerSocket");
const iceCandidateSocket_1 = require("./iceCandidateSocket");
const initSocket = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: '*',
        },
        serveClient: false,
    });
    io.on('connection', (socket) => {
        (0, roomSocket_1.roomSocket)(io, socket);
        (0, offerSocket_1.offerSocket)(io, socket);
        (0, answerSocket_1.answerSocket)(io, socket);
        (0, iceCandidateSocket_1.iceCandidateSocket)(io, socket);
        (0, roomSocket_1.roomLeaveSocket)(io, socket);
    });
};
exports.initSocket = initSocket;
//# sourceMappingURL=index.js.map