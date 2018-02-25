
import {Id} from './model'

export interface AddScore {
  date: string
  gameId: Id
  playerId1: Id
  playerId2: Id
  score1: number
  score2: number
}

export interface AddPlayer {
  name: string
}

export interface AddGame {
  name: string
}
