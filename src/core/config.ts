
import * as fs from 'fs'
import {jdenticon} from 'jdenticon'

export type DatabaseType = 'google-sheets'

export interface GoogleSheetsDatabaseConfig {
  spreadsheetId: string
  secretsPath?: string
}

export type DatabaseConfig = {
  type: DatabaseType,
} & GoogleSheetsDatabaseConfig

export interface Config {
  database: DatabaseConfig
  title?: string
  port?: number
  baseUrl?: string
  scoreBoardUiScriptPath?: string
}

export const validateConfig = (config: Config) => {
  if (!config.database) {
    throw new Error('Missing database configuration')
  }
  if (!config.database.type) {
    throw new Error('Missing database type')
  }
  if (config.database.type === 'google-sheets') {
    if (!config.database.spreadsheetId) {
      throw new Error('Missing database spreadsheetId')
    }
  }
}

export const loadConfig = (): Config => {
  let config = null
  try {
    config = JSON.parse(fs.readFileSync('config.json').toString())
  } catch (e) {
    throw new Error('Failed to load config.json file: ' + e)
  }
  validateConfig(config)
  return config
}
