import { Hono } from 'hono'
import IndexPage from '../views/pages/indexPage'
const indexRoute = new Hono()


indexRoute.get('/', (c) => {
  return c.html(<IndexPage />)
})

export default indexRoute