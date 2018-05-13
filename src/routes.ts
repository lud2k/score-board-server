
import {HTML} from './template'
import {
  addPlayer, addScore, getGames, getPlayers, getScores, getDataUrl,
  getTeams
} from './database/database'
import {ApiError} from './core/error'
import {getScoreBoardUiScript} from './core/score-board-ui'
import {validateAddPlayerBody, validateAddScoreBody} from './core/validation'
import {Config} from './core/config'
import {Application, Request, Response} from 'express'
import {isNpmRunDev} from './core/env'

export const safeRoute = async (req: Request, res: Response, fn: () => void) => {
  try {
    await fn()
  } catch (e) {
    if (e instanceof ApiError) {
      res.status(400).send(e.data)
    } else {
      console.error('Failed to execute request', e)
      res.sendStatus(500)
    }
  }
}

export const setupRoutes = (app: Application, config: Config) => {
  const SCORE_BOARD_UI_JAVASCRIPT = getScoreBoardUiScript(config)

  app.get('/', async (req, res) => {
    await safeRoute(req, res, () => {
      res.send(HTML)
    })
  })

  app.get('/index.js', async (req, res) => {
    await safeRoute(req, res, () => {
      if (isNpmRunDev()) {
        // reload the file every time
        res.send(getScoreBoardUiScript(config))
      } else {
        // use cached file
        res.send(SCORE_BOARD_UI_JAVASCRIPT)
      }
    })
  })

  app.get('/config.json', async (req, res) => {
    await safeRoute(req, res, () => {
      res.send({
        backend: {
          type: 'rest-api',
          url: config.baseUrl || `${req.protocol}://${req.headers.host}`,
          dataUrl:  getDataUrl(config),
        },
      })
    })
  })

  app.get('/data', async (req, res) => {
    await safeRoute(req, res, async () => {
      const scores = await getScores(config)
      const players = await getPlayers(config)
      const games = await getGames(config)
      const teams = await getTeams(config)
      res.send({ scores, players, games, teams })
    })
  })

  app.get('/scores', async (req, res) => {
    await safeRoute(req, res, async () => {
      res.send(await getScores(config))
    })
  })

  app.post('/scores', async (req, res) => {
    await safeRoute(req, res, async () => {
      // validate player
      const body = req.body
      validateAddScoreBody(body)
      res.send(await addScore(config, body))
    })
  })

  app.get('/players', async (req, res) => {
    await safeRoute(req, res, async () => {
      res.send(await getPlayers(config))
    })
  })

  app.get('/teams', async (req, res) => {
    await safeRoute(req, res, async () => {
      res.send(await getTeams(config))
    })
  })

  app.post('/players', async (req, res) => {
    await safeRoute(req, res, async () => {
      // validate player
      const body = req.body
      validateAddPlayerBody(body)
      res.send(await addPlayer(config, body))
    })
  })
}
