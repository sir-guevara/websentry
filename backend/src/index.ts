import { Hono } from 'hono'
import router from './routes/app'


const app = new Hono()



app.route('/api/', router)


export default {
  port: 3000,
  fetch:app.fetch
}