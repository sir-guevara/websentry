import { Hono } from 'hono';
import indexRoute from './routes/index.routes';
import dashboardRoute from './routes/dashboard.routes';
import { logger } from 'hono/logger';

const app = new Hono()

app.use('*', logger())
app.route('', indexRoute)
app.route('/dashboard', dashboardRoute)


const port = Bun.env.PORT || 8000;
export const server = Bun.serve({
    port,
    fetch: app.fetch,
  });

console.log(`Server running at http://${server.hostname}:${server.port}`);