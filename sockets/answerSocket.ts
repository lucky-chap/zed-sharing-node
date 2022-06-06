import { Server , Socket } from 'socket.io';

interface IAnswerPayload {
    answer: never;
    target: string;
}


export const answerSocket = (io: Server, socket: Socket): void => {
    socket.on('answer', (payload: IAnswerPayload) => {
        console.log(payload);
        io.to(payload.target).emit('answer', payload.answer);
    });
}