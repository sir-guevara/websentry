import { Hono } from 'hono';
import indexRoute from './routes/index.routes';
import dashboardRoute from './routes/dashboard.routes';
import { serveStatic } from 'hono/bun'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.route('', indexRoute)
app.route('/dashboard', dashboardRoute)

const port = Bun.env.PORT || 8000;
const enviroment = Bun.env.DEV  || 'development';
export const server = Bun.serve({
    enviroment,
    port,
    fetch: app.fetch,
  });

console.log(`Server running at http://${server.hostname}:${server.port}`);