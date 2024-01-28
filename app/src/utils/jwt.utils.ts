import { sign, verify } from "hono/jwt";
import { timeInSeconds } from "./utils";
import { getSignedCookie } from "hono/cookie";

const JWT_SECRET = Bun.env.JWT_SECRET;
const ALGO = Bun.env.ALGORITHM as "HS256" | "HS384" | "HS512";


export const signJwt = async (
  payload: { [key: string]: unknown },
  options?: { exp?: number;}
) => {
  const expirationInSeconds = 60 * 60 * 24* 7; //7 days expiration in seconds
  return await sign(
    { ...payload, exp:options?.exp || timeInSeconds(expirationInSeconds) },
    JWT_SECRET!,
    ALGO!
  );
};

export const verifyJwt = async (token: string) => {
  try {
    const payload = await verify(token, JWT_SECRET!, ALGO!);
    if(payload){
        return payload;
    }
  } catch (error) { return error; }
};
