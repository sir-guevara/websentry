import { Hono } from "hono";
import Layout from "../views/Layout";
import IndexPage from "../views/pages";
import LoginPage from "../views/pages/login";
import { loginService, signupService } from "../services/user.service";
import { CreateUserDto } from "../models/user.dto";
import SignupPage from "../views/pages/signup";
const indexRoute = new Hono();

indexRoute.get("/", (c) => {
  return c.html(Layout({ content: IndexPage() }));
});

indexRoute
  .get("/login", (c) => {
    return c.html(Layout({ content: LoginPage() }));
  })
  .post(async (c) => {
    try {
      const body = (await c.req.parseBody()) as CreateUserDto;
      console.log(body);
      const user = await loginService({ ...body });
      return c.json(user);
    } catch (error) {
      return c.json({ error });
    }
  });

indexRoute
  .get("/signup", (c) => {
    return c.html(Layout({ content: SignupPage() }));
  })
  .post(async (c) => {
    try {
      const body = (await c.req.parseBody()) as CreateUserDto;
      console.table(body);
      const user = await signupService({ ...body });
      return c.json(user);
    } catch (error) {
      console.log(error);
      c.status(400)
      return c.json({ error });
    }
  });

export default indexRoute;
