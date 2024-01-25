import { Hono } from "hono";
import Layout from "../views/Layout";
import dashboardPage from "../views/pages/dashboard";

const dashboardRoute = new Hono();

dashboardRoute.get("/", (c) => {
  return c.html(Layout({content:dashboardPage()}))
});


export default dashboardRoute;