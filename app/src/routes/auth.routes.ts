import { Hono } from "hono";
import { loginService } from "../services/user.service";
import Layout from "../views/Layout";
import LoginPage from "../views/pages/login";
import { CreateUserDto } from "../models/user.dto";
import { signJwt } from "../utils/jwt.utils";
import { deleteCookie, setCookie } from "hono/cookie";
import { timeInSeconds } from "../utils/utils";

const authRoute = new Hono

const COOKIE_SECRET = Bun.env.COOKIE_SECRET
authRoute
  .get("/login", (c) => {
    return c.html(Layout({ content: LoginPage() }));
  })
  .post(async (c) => {
    try {
      const body = (await c.req.json()) as CreateUserDto;
      const user = await loginService({ ...body });
      const token = await signJwt(user)
      setCookie(c, 'auth_token',token,{
        path: '/',
        secure: true,
        httpOnly: true,
        maxAge:  60 * 60 * 24 * 7,
        sameSite: 'Strict',
      })
      c.status(200)
      return c.json("ok")
    } catch (error:any) {
      c.status(400)
      return c.json({message: error.message})
    }
  });


  authRoute.get('/logout',(c)=>{
    deleteCookie(c,'auth_token')
    return c.redirect('/login')
  });
  export default authRoute;