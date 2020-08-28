import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import morgan from 'morgan'
import cors from 'cors'

import apollo from './graphql'
import { LoggerStream } from './utils/logger'
import packageJson from '../package.json'

const app = express()

apollo.applyMiddleware({ app })

app.use(
  cors({
    methods: 'POST,GET',
  }),
)

app.use(morgan('dev', { stream: new LoggerStream() }))

app.use(
  compression({
    threshold: 0,
  }),
)

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(bodyParser.json())

app.use('/', (_, res) =>
  res
    .status(200)
    .send(`${packageJson.name} is running at version ${packageJson.version}!`),
)

export default app
