"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iceCandidateSocket = void 0;
const iceCandidateSocket = (io, socket) => {
    socket.on('ice-candidate', (payload) => {
        console.log(payload);
        io.to(payload.target).emit('ice-candidate', payload.candidate);
    });
};
exports.iceCandidateSocket = iceCandidateSocket;
//# sourceMappingURL=iceCandidateSocket.js.map