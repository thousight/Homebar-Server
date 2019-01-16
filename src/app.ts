import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as morgan from 'morgan'
import * as cors from 'cors'

import { LoggerStream } from './utils/logger'
import * as packageJson from '../package.json'

const app = express()

app.use(
  cors({
    methods: 'POST,GET,OPTIONS',
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
  res.status(200).send(`${packageJson.name} is running!`),
)

export default app
