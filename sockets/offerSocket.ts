import { Server, Socket } from 'socket.io'

interface IOfferPayload {
	offer: never
	target: string
}


export const offerSocket = (io: Server, socket: Socket): void => {
	socket.on('offer', (payload: IOfferPayload) => {
		console.log(payload)
		io.to(payload.target).emit('offer', payload.offer)
	})
}