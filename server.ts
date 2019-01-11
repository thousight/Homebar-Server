import * as dotenv from 'dotenv'

import app from './src/app'

dotenv.config()

const port = process.env.PORT || 2333
app.listen(port, (error: Error) => {
  if (error) {
    console.log(error)
  } else {
    console.log(`Listening on port ${port}.`)
  }
})