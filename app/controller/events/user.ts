import { Server, Socket } from 'socket.io'
import { UsersDatabase } from '../../models/user'

export class UserEvent {

    constructor(
        private userDatabase: UsersDatabase
    ) { }

    handler(socket: Socket, io: Server) {
        socket.on('new:user', () => {
            this.userDatabase.addUser(socket.id)
            const users = this.userDatabase.listUsers()
            io.emit('user:list', users)
        })
    }

}
