import { Context, Next } from "hono";
import { verifyJwt } from "../utils/jwt.utils";
import { getCookie } from "hono/cookie";

export const authMiddleware = async (c:Context, next:Next) => {
    try {
        const token = await  getCookie(c,'auth_token');
        if (!token) {
            c.status(401);
            return c.redirect('/login')
        }
       const user = await verifyJwt(token);
       if (!user) {
        c.status(401);
        return c.redirect('/login')
       }
       c.set('user', user);
        await next()
    } catch (error:any) {
        c.status(401);
        return c.json(error.message);
    }
}