
import * as fs from 'fs'
import {auth} from 'google-auth-library'
import {AddPlayer, AddScore} from '../../core/api'
import {Game, Player, Score, Team} from '../../core/model'
import {Config} from '../../core/config'
import * as q from 'q'
import * as _ from 'lodash'
import {ApiError} from '../../core/error'

const google = require('googleapis')
let SECRETS: any = null

export const initialize = async (config: Config): Promise<void> => {
  // load credentials
  const path = config.database.secretsPath || 'secrets.json'
  const json = fs.readFileSync(path).toString()
  SECRETS = JSON.parse(json)
}

export const getScores = async (config: Config): Promise<Score[]> => {
  const client = await getGAPIClient()
  const sheets = google.sheets('v4')
  const response = await q.nfcall(sheets.spreadsheets.values.get, {
    auth: client,
    spreadsheetId: config.database.spreadsheetId,
    range: `Scores!A1:F100000`,
  }) as any

  const players = _.keyBy(await getPlayers(config), 'name')
  const games = _.keyBy(await getGames(config), 'name')

  return response.data.values.slice(1).map((row: any, i: number): Score => {
    try {
      return {
        id: i.toString(),
        date: row[0],
        gameId: games[row[1]].id,
        playerId1: players[row[2]].id,
        playerId2: players[row[3]].id,
        score1: parseInt(row[4], 10),
        score2: parseInt(row[5], 10),
      }
    } catch (e) {
      console.warn(`There is an issue with score row ${i}: ${e}`)
    }
  })
}

export const addScore = async (config: Config, score: AddScore): Promise<Score> => {
  const client = await getGAPIClient()
  const sheets = google.sheets('v4')

  const games = await getGames(config)
  const game = _.find(games, {id: score.gameId})
  if (!game) {
    throw new ApiError({code: 'VALIDATION', field: 'gameId', message: 'Invalid gameId'})
  }

  const players = await getPlayers(config)
  const player1 = _.find(players, {id: score.playerId1})
  if (!player1) {
    throw new ApiError({code: 'VALIDATION', field: 'playerId1', message: 'Invalid playerId1'})
  }
  const player2 = _.find(players, {id: score.playerId2})
  if (!player2) {
    throw new ApiError({code: 'VALIDATION', field: 'playerId2', message: 'Invalid playerId2'})
  }

  const response: any = await q.nfcall(sheets.spreadsheets.values.append, {
    auth: client,
    spreadsheetId: config.database.spreadsheetId,
    range: `Scores!A1:F100000`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [
        [score.date, game.name, player1.name, player2.name, score.score1, score.score2],
      ],
    },
  })

  return {
    id: /!A(\d+):/.exec(response.data.updates.updatedRange)[1],
    date: score.date,
    gameId: score.gameId,
    playerId1: score.playerId1,
    playerId2: score.playerId2,
    score1: score.score1,
    score2: score.score2,
  } as Score
}

export const addPlayer = async (config: Config, player: AddPlayer): Promise<Player> => {
  const client = await getGAPIClient()
  const sheets = google.sheets('v4')

  // make sure this player doesn't already exist
  const players = await getPlayers(config)
  const existingPlayer = _.find(players, { name: player.name })
  if (existingPlayer) {
    throw new ApiError({code: 'VALIDATION', field: 'name', message: 'Player already exists'})
  }

  const teams = await getTeams(config)
  const team = _.find(teams, { id: player.teamId })
  if (!team) {
    throw new ApiError({code: 'VALIDATION', field: 'teamId', message: 'Team does not exist'})
  }

  // add new player
  const response: any = await q.nfcall(sheets.spreadsheets.values.append, {
    auth: client,
    spreadsheetId: config.database.spreadsheetId,
    range: `Players!A1:F100000`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [
        [player.name, team.name],
      ],
    },
  })

  return {
    id: /!A(\d+)/.exec(response.data.updates.updatedRange)[1],
    name: player.name,
    teamId: team.id
  } as Player
}

export const getPlayers = async (config: Config): Promise<Player[]> => {
  const client = await getGAPIClient()
  const sheets = google.sheets('v4')
  const response = await q.nfcall(sheets.spreadsheets.values.get, {
    auth: client,
    spreadsheetId: config.database.spreadsheetId,
    range: `Players!A1:B100000`,
  }) as any

  const teams = _.keyBy(await getTeams(config), 'name')

  return response.data.values.slice(1).map((row: string[], i: number) => ({
    id: i.toString(),
    name: row[0],
    teamId: teams[row[1]] ? teams[row[1]].id : null,
  } as Player))
}

export const getGames = async (config: Config): Promise<Game[]> => {
  const client = await getGAPIClient()
  const sheets = google.sheets('v4')
  const response = await q.nfcall(sheets.spreadsheets.values.get, {
    auth: client,
    spreadsheetId: config.database.spreadsheetId,
    range: `Games!A1:F100000`,
  }) as any

  return response.data.values.slice(1).map((row: string[], i: number) => ({
    id: i.toString(),
    name: row[0],
  } as Game))
}

export const getTeams = async (config: Config): Promise<Team[]> => {
  const client = await getGAPIClient()
  const sheets = google.sheets('v4')
  const response = await q.nfcall(sheets.spreadsheets.values.get, {
    auth: client,
    spreadsheetId: config.database.spreadsheetId,
    range: `Teams!A1:B100000`,
  }) as any

  return response.data.values.slice(1).map((row: string[], i: number) => ({
    id: i.toString(),
    name: row[0],
  } as Team))
}

const getGAPIClient = async () => {
  const client = auth.fromJSON(SECRETS) as any
  client.scopes = ['https://www.googleapis.com/auth/spreadsheets']
  await client.authorize()
  return client
}

export const getDataUrl = (config: Config): string => {
  return `https://docs.google.com/spreadsheets/u/1/d/${config.database.spreadsheetId}/edit`
}
