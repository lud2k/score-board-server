
import * as express from 'express'
import * as bodyParser from 'body-parser'
import {Config, loadConfig} from './core/config'
import {setupRoutes} from './routes'
import {isNpmRunDev} from './core/env'
import * as Database from './database/database'

export const startServer = (config?: Config) => {
  // load config file if needed
  if (!config) {
    config = loadConfig()
  }
  console.info('Loaded config', JSON.stringify(config))

  Database.initialize(config)
    .then(() => {
      const port = config.port || 3030
      const app = express()
      app.use(bodyParser.json())
      setupRoutes(app, config)
      app.listen(port, () => console.info(`Server started: http://localhost:${port}`))
    })
    .catch((e) => {
      console.error('Failed to initialize backend', e)
    })
}

// start server if this is "npm run dev"
if (isNpmRunDev()) {
  startServer()
}

export default startServer
