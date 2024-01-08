import { Hono } from "hono";
import DbPage from "../views/pages/dashboardPage";
import IndexPage from "../views/pages/indexPage";
const indexRoute = new Hono();

indexRoute.get("/", (c) => {
  return c.html(<IndexPage />);
});
indexRoute.get("/dashboard", (c) => {
  return c.html(<DbPage />);
});

export default indexRoute;
