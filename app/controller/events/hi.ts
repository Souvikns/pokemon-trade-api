import { Server, Socket } from 'socket.io'


class HiEvent {


    handler(socket: Socket, io: Server) {
        socket.on('ping', (data) => {
            io.emit('pong', data)
        })        
    }
}


export const hi = new HiEvent()