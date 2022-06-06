"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offerSocket = void 0;
const offerSocket = (io, socket) => {
    socket.on('offer', (payload) => {
        console.log(payload);
        io.to(payload.target).emit('offer', payload.offer);
    });
};
exports.offerSocket = offerSocket;
//# sourceMappingURL=offerSocket.js.map