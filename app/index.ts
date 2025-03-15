import express from 'express'
import { Server } from 'socket.io'
import http from 'http'

import { UsersDatabase } from './models/user'
import { TradeList } from './models/trade'


const app = express()
const server = http.createServer(app)
const io = new Server(server)

const userDatabase = new UsersDatabase()
const tradeDatabase = new TradeList()

io.on('connection', (socket) => {
    userDatabase.addUser(socket.id)

    socket.on("new-trade", (trade) => {
        const tradeId = tradeDatabase.addTrade(trade.game, trade.pokemon_for_trade, trade.pokemon_wanted)
        socket.emit('trade-list',)

    })

    socket.on('dissconnect', () => {
        userDatabase.removeUser(socket.id)
    })
})


app.get("/", (req, res) => {
    res.send("Pokemon Trade API")
})


server.listen(8080, () => {
    console.log("server listending on port: 8080")
})