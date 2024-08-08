import { v4 as uuidv4 } from 'uuid'
import { TradeInterface } from './trade'
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'

export class User {
    private id: string
    private username: string
    private socket_id: string

    constructor(username: string, socket_id: string) {
        this.id = uuidv4()
        this.username = username
        this.socket_id = socket_id
    }

    get socketId(): string {
        return this.socketId
    }

    addTrade(Trade: TradeInterface) {

    }



    static generateNewUser(username: string, socket_id: string): User {
        return new User(username, socket_id)
    }
}

export class UsersDatabase {
    private users: Array<User> = []

    addUser(socket_id: string) {
        this.users.push(User.generateNewUser(
            uniqueNamesGenerator({dictionaries: [adjectives, colors, animals], length: 2}),
            socket_id
        ))
    }

    removeUser(socket_id: string) {
        this.users = this.users.filter(u => {
            if(u.socketId !=  socket_id) {
                return u
            }
        })
    }
}