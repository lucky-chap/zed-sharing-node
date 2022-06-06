"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomLeaveSocket = exports.roomSocket = void 0;
const MAX_ROOM_MEMBERS = 2;
const clientToRoomMap = {};
const getClients = (io, room) => {
    const clients = io.sockets.adapter.rooms[room] || [];
    // if (clients) {
    // 	return [...clients]
    // }
    // return []
    return [...clients];
};
const canConnect = (clients) => {
    return clients.length < MAX_ROOM_MEMBERS;
};
const emitPeerConnected = (io, clients) => {
    io.to(clients[0]).emit('peer-connected', { id: clients[1], role: 'peer' });
    io.to(clients[1]).emit('peer-connected', { id: clients[0], role: 'creator' });
};
const emitPeerDisconnected = (io, client) => {
    io.to(client).emit('peer-disconnected');
};
// UPON CONNECTION
const roomSocket = (io, socket) => {
    socket.on('join-room', (roomSlug) => {
        let clients = getClients(io, roomSlug);
        if (!canConnect(clients)) {
            socket.emit('error', { message: 'Room is full' });
            return;
        }
        socket.join(roomSlug);
        // set the client to the room
        clientToRoomMap[socket.id] = roomSlug;
        // Get updated room memebers
        clients = getClients(io, roomSlug);
        if (clients.length == MAX_ROOM_MEMBERS) {
            emitPeerConnected(io, clients);
        }
    });
};
exports.roomSocket = roomSocket;
// UPON DISCONNECTION
const roomLeaveSocket = (io, socket) => {
    socket.on('disconnecting', () => {
        var _a;
        const disconnectedClient = socket.id;
        const disconnectedClientRoom = clientToRoomMap[disconnectedClient];
        delete clientToRoomMap[disconnectedClient];
        const allClientsInRoom = getClients(io, disconnectedClientRoom);
        const connectedClient = (_a = allClientsInRoom.filter(value => {
            return value !== disconnectedClient;
        })) === null || _a === void 0 ? void 0 : _a[0];
        emitPeerDisconnected(io, connectedClient);
    });
};
exports.roomLeaveSocket = roomLeaveSocket;
//# sourceMappingURL=roomSocket.js.map