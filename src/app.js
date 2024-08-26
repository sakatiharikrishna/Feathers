// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
import { feathers } from '@feathersjs/feathers'
import express, {
  rest,
  json,
  urlencoded,
  cors,
  serveStatic,
  notFound,
  errorHandler
} from '@feathersjs/express'
import configuration from '@feathersjs/configuration'
import socketio from '@feathersjs/socketio'
import { configurationValidator } from './configuration.js'
import { logger } from './logger.js'
import { logError } from './hooks/log-error.js'
import { mongodb } from './mongodb.js'
import { services } from './services/index.js'
import { channels } from './channels.js'

const app = express(feathers())

const feathersClient = feathers();
feathersClient.configure(feathers.rest().axios(axios));
feathersClient.configure(feathers.authentication());




app.configure(configuration(configurationValidator))
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/', serveStatic(app.get('public')))


app.configure(rest())
app.configure(
  socketio({
    cors: {
      origin: app.get('origins')
    }
  })
)
app.configure(mongodb)

app.configure(services)
app.configure(channels)


app.use(notFound())
app.use(errorHandler({ logger }))


app.hooks({
  around: {
    all: [logError]
  },
  before: {},
  after: {},
  error: {}
})

app.hooks({
  setup: [],
  teardown: []
})


export { app }
