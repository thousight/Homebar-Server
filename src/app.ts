import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as morgan from 'morgan'
import * as cors from 'cors'

const app = express()

app.use(
  cors({
    methods: 'POST,GET,OPTIONS',
  }),
)

app.use(morgan('dev'))

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

export default app
