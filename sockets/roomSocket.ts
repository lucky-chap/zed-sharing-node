import { Server, Socket } from 'socket.io'
const MAX_ROOM_MEMBERS = 2

const clientToRoomMap: {
	[key: string]: string
} = {}

const getClients = (io: Server, room: string): string[] => {
	const clients = io.sockets.adapter.rooms[room] || []
	// if (clients) {
	// 	return [...clients]
	// }
	// return []
    return [...clients];
}

const canConnect = (clients: string[]): boolean => {
	return clients.length < MAX_ROOM_MEMBERS
}

const emitPeerConnected = (io: Server, clients: string[]): void => {
	io.to(clients[0]).emit('peer-connected', { id: clients[1], role: 'peer' })
	io.to(clients[1]).emit('peer-connected', { id: clients[0], role: 'creator' })
}

const emitPeerDisconnected = (io: Server, client: string): void => {
    io.to(client).emit('peer-disconnected')
}

// UPON CONNECTION
export const roomSocket = (io: Server, socket: Socket): void => {
	socket.on('join-room', (roomSlug: string): void => {
		let clients: string[] = getClients(io, roomSlug)
		if (!canConnect(clients)) {
			socket.emit('error', { message: 'Room is full' })
			return
		}

		socket.join(roomSlug)
		// set the client to the room
		clientToRoomMap[socket.id] = roomSlug;

        // Get updated room memebers
        clients = getClients(io, roomSlug);
        if(clients.length == MAX_ROOM_MEMBERS) {
            emitPeerConnected(io, clients);
        }
	})
}


// UPON DISCONNECTION
export const roomLeaveSocket = (io: Server, socket: Socket): void => {
    socket.on('disconnecting', () => {
        const disconnectedClient = socket.id;
        const disconnectedClientRoom = clientToRoomMap[disconnectedClient];
        delete clientToRoomMap[disconnectedClient];

        const allClientsInRoom = getClients(io, disconnectedClientRoom);
        const connectedClient = allClientsInRoom.filter(value => {
            return value !== disconnectedClient;
        })?.[0];

        emitPeerDisconnected(io, connectedClient);
    })
}