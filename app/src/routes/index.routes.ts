import { Hono } from "hono";
import Layout from "../views/Layout";
import IndexPage from "../views/pages";
import { CreateUserDto } from "../models/user.dto";
import SignupPage from "../views/pages/signup";
import { loginService, signupService } from "../services/user.service";
import { signJwt } from "../utils/jwt.utils";
import { setCookie } from "hono/cookie";

const indexRoute = new Hono();

indexRoute.get("/", (c) => {
  return c.html(Layout({ content: IndexPage() }));
});


indexRoute
  .get("/signup", (c) => {
    return c.html(Layout({ content: SignupPage() }));
  })
  .post(async (c) => {
    try {
      const body = (await c.req.json()) as CreateUserDto;
      const user = await signupService({ ...body });
      const {password, ...rest} = user;
      const token = await signJwt(rest)
      setCookie(c, 'auth_token',token,{
        path: '/',
        secure: true,
        httpOnly: true,
        maxAge:  60 * 60 * 24 * 7,
        sameSite: 'Strict',
      })
      c.status(200)
      return c.redirect('/dashboard')
    } catch (error:any) {
      console.log(error);
      c.status(400)
      return c.json({message:error.message})
    }
  });

  

export default indexRoute;
