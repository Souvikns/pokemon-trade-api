import express from 'express'
import { Server } from 'socket.io'
import http from 'http'
import { v4 as uuidv4 } from 'uuid'

import { TradeInterface } from './models/trade'


const app = express()
const server = http.createServer(app)
const io = new Server(server)

const TradeList: Array<TradeInterface> = []

io.on('connection', (socket) => {
    console.log('Client connected')

    socket.on("new-trade", (trade) => {
        TradeList.push({ id: uuidv4(), game: trade.game, pokemon_for_trade: trade.pokemon_for_trade, pokemon_want: trade.pokemon_want })
        socket.emit('trade-list', TradeList)
        console.log(socket.id)

    })

})


server.listen(8080, () => {
    console.log("server listending on port: 8080")
})