
export type Id = string

export interface Game {
  id: Id
  name: string
}

export interface Score {
  id: Id
  date: string
  gameId: Id
  playerId1: Id
  playerId2: Id
  score1: number
  score2: number
}

export interface Player {
  id: Id
  teamId: Id
  name: string
}

export interface Team {
  id: Id
  name: string
}
