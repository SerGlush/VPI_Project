import cors from 'cors'
import express, { json, urlencoded } from 'express'
import helmet from 'helmet'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { developmentConfig, productionConfig } from './config/index.js'
import authentificationRouter from './routes/authentification.js'
import { codedErrorHandler, unknownErrorHandler } from './middleware/index.js'
import userRouter from './routes/user.js'

//const __dirname = dirname(fileURLToPath(import.meta.url))

const isProduction = process.env.NODE_ENV === 'production'

let config
if (isProduction) {
  config = productionConfig
} else {
  config = developmentConfig
}

const app = express()

app.use(helmet())
app.use(
  cors({
    origin: config.allowedOrigin
  })
)
app.use(json())
app.use(urlencoded({ extended: true }))
if (isProduction) {
  app.use(express.static(join(__dirname, '../../client/build')))
}

app.use('/api/v1', authentificationRouter)
app.use('/api/v1', userRouter)
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' })
})
app.use(codedErrorHandler)
app.use(unknownErrorHandler)

app.listen(config.port, () => {
  console.log('🚀 Server ready to handle requests')
})
