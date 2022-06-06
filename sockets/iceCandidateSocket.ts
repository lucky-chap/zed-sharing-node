import { Server, Socket } from 'socket.io'

interface IICECandidatePayload {
	candidate: never
	target: string
}


export const iceCandidateSocket = (io: Server, socket: Socket): void => {
	socket.on('ice-candidate', (payload: IICECandidatePayload): void => {
		console.log(payload);
		io.to(payload.target).emit('ice-candidate', payload.candidate)
	})
}