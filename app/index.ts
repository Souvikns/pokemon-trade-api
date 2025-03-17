import express from 'express'
import { Server } from 'socket.io'
import http from 'http'

import { User, UsersDatabase } from './models/user'
import { TradeList } from './models/trade'
import path from 'path'

import { specRouter } from './controller/routes/spec'

import { hi } from './controller/events/hi'
import { UserEvent } from './controller/events/user'

const app = express()
app.use(express.static(path.join(__dirname, "../spec")))
const server = http.createServer(app)
const io = new Server(server)

const userDatabase = new UsersDatabase()
const tradeDatabase = new TradeList()

io.on('connection', (socket) => {
    hi.handler(socket, io)

    const userEvent = new UserEvent(userDatabase)
    userEvent.handler(socket, io)

    socket.on('disconnect', () => {
        userDatabase.removeUser(socket.id)
    })
})


app.use('/', specRouter.bind())



server.listen(8080, () => {
    console.log("server listending on port: 8080")
})