import * as fs from 'fs'
import {Config} from './config'

const SCRIPT_PATHS = ['./node_modules/score-board-ui/public/index.js',
  './node_modules/score-board-server/node_modules/score-board-ui/public/index.js']

export const getScoreBoardUiScript = (config: Config): string => {
  if (config.scoreBoardUiScriptPath) {
    return fs.readFileSync(config.scoreBoardUiScriptPath).toString()
  } else {
    for (let i=0; i<SCRIPT_PATHS.length; i++) {
      const path = SCRIPT_PATHS[i]
      if (fs.existsSync(path)) {
        return fs.readFileSync(path).toString()
      }
    }
    throw new Error('Could not find score-board-ui/public/index.js')
  }
}
