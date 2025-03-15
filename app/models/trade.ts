import { v4 as uuidv4 } from 'uuid'

export interface TradeInterface {
    id: string
    game: Game
    pokemon_for_trade: string
    pokemon_wanted: string
}

type Game = 'SV' | 'SWSH' | 'BDSP'

export class TradeList {
    private _trades: Array<TradeInterface> = []

    addTrade(game: Game, pokemon_for_trade: string, pokemon_wanted: string): string {
        const tradeId = uuidv4()
        this._trades.push({
            id: tradeId,
            game,
            pokemon_for_trade,
            pokemon_wanted
        })
        return tradeId
    }
}