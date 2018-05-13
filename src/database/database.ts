
import * as GoogleSheets from './google-sheets/google-sheets'
import {Config} from '../core/config'
import {AddPlayer, AddScore} from '../core/api'
import {Game, Player, Score} from '../core/model'

export const initialize = async (config: Config): Promise<void> => {
  const type = config.database.type
  if (type === 'google-sheets') {
    return GoogleSheets.initialize(config)
  }
  throw new Error(`Unknow database type: ${type}`)
}

export const addScore = async (config: Config, score: AddScore): Promise<Score> => {
  const type = config.database.type
  if (type === 'google-sheets') {
    return GoogleSheets.addScore(config, score)
  }
  throw new Error(`Unknow database type: ${type}`)
}

export const getScores = async (config: Config): Promise<Score[]> => {
  const type = config.database.type
  if (type === 'google-sheets') {
    return GoogleSheets.getScores(config)
  }
  throw new Error(`Unknow database type: ${type}`)
}

export const getPlayers = async (config: Config): Promise<Player[]> => {
  const type = config.database.type
  if (type === 'google-sheets') {
    return GoogleSheets.getPlayers(config)
  }
  throw new Error(`Unknow database type: ${type}`)
}

export const getGames = async (config: Config): Promise<Game[]> => {
  const type = config.database.type
  if (type === 'google-sheets') {
    return GoogleSheets.getGames(config)
  }
  throw new Error(`Unknow database type: ${type}`)
}

export const getTeams = async (config: Config): Promise<Game[]> => {
  const type = config.database.type
  if (type === 'google-sheets') {
    return GoogleSheets.getTeams(config)
  }
  throw new Error(`Unknow database type: ${type}`)
}

export const addPlayer = async (config: Config, player: AddPlayer): Promise<Player> => {
  const type = config.database.type
  if (type === 'google-sheets') {
    return GoogleSheets.addPlayer(config, player)
  }
  throw new Error(`Unknow database type: ${type}`)
}

export const getDataUrl = (config: Config): string => {
  const type = config.database.type
  if (type === 'google-sheets') {
    return GoogleSheets.getDataUrl(config)
  }
  throw new Error(`Unknow database type: ${type}`)
}
