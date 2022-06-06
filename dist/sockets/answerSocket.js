"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerSocket = void 0;
const answerSocket = (io, socket) => {
    socket.on('answer', (payload) => {
        console.log(payload);
        io.to(payload.target).emit('answer', payload.answer);
    });
};
exports.answerSocket = answerSocket;
//# sourceMappingURL=answerSocket.js.map