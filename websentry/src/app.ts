import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { logger } from 'hono/logger';
import indexRoute from './controllers';



const app = new Hono()

app.use('*', logger())
app.use('/static/*', serveStatic({ path: './public' }))
app.use("/assets/*", serveStatic({ root: "./dist" }));
app.get('/favicon.ico', serveStatic({ path: './public/favicon.ico' }))

app.route('/', indexRoute)


const port = parseInt(process.env.PORT!) || 3000
console.log(`Running at http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch
};

