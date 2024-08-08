
export interface TradeInterface {
    id: string
    game: Game
    pokemon_for_trade: string
    pokemon_want: string
}

type Game = 'SV' | 'SWSH' | 'BDSP' | 'PLA'

