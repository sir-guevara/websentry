import { sign, verify } from "hono/jwt";

const JWT_SECRET = Bun.env.JWT_SECRET;
const ALGO = Bun.env.ALGORITHM as "HS256" | "HS384" | "HS512";


export const signJwt = async (
  payload: { [key: string]: unknown },
  options?: { exp?: number;}
) => {
  const now = new Date();
  const expirationInSeconds = 60 * 60 * 2 * 7; //7 days expiration in seconds
  const expirationTimestamp =
    Math.floor(now.getTime() / 1000) + expirationInSeconds;

  return await sign(
    { ...payload, exp:options?.exp || expirationTimestamp },
    JWT_SECRET!,
    ALGO!
  );
};

export const verifyJwt = async (token: string) => {
  try {
    const payload = await verify(token, JWT_SECRET!, ALGO!);
  } catch (error) { return error; }
};
