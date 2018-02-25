import {ApiError} from './error'
import * as _ from 'lodash'

export const validateAddScoreBody = (body: any) => {
  if (!body) {
    throw new ApiError({ code: 'VALIDATION', field: 'body', message: 'Missing body' })
  }
  if (!body.playerId1 || !_.isString(body.playerId1)) {
    throw new ApiError({ code: 'VALIDATION', field: 'playerId1', message: 'Invalid string' })
  }
  if (!body.playerId2 || !_.isString(body.playerId2)) {
    throw new ApiError({ code: 'VALIDATION', field: 'playerId2', message: 'Invalid string' })
  }
  if (body.playerId1 === body.playerId2) {
    throw new ApiError({ code: 'VALIDATION', field: 'playerId',
      message: 'Cannot be the same user' })
  }
  if (!body.gameId || !_.isString(body.gameId)) {
    throw new ApiError({ code: 'VALIDATION', field: 'gameId', message: 'Invalid string' })
  }
  if (!_.isInteger(body.score1)) {
    throw new ApiError({ code: 'VALIDATION', field: 'score1', message: 'Invalid integer' })
  }
  if (!_.isInteger(body.score2)) {
    throw new ApiError({ code: 'VALIDATION', field: 'score2', message: 'Invalid integer' })
  }
}

export const validateAddPlayerBody = (body: any) => {
  if (!body) {
    throw new ApiError({ code: 'VALIDATION', field: 'body', message: 'Missing body' })
  }
  if (!body.name || !body.name.trim()) {
    throw new ApiError({ code: 'VALIDATION', field: 'name', message: 'Missing name' })
  }
}
