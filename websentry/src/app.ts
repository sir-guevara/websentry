import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'
import indexRoute from './controllers'

const app = new Hono()
app.use('*', logger())


app.use("/assets/*", serveStatic({ root: "./dist" }));
app.use('/static/*', serveStatic({ root: './' }))
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))

app.route('/', indexRoute)

export default app