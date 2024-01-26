 import {sign, verify } from 'hono/jwt'
 

 const JWT_SECRET = Bun.env.JWT_SECRET;
 const ALGO = Bun.env.ALGORITHM as "HS256"|"HS384"|"HS512";
 export const signJwt = async (payload:{ [key: string]: unknown }, options:{exp?:number,nbf?:number,iat?:number}) => {
    return  await sign({payload,...options}, JWT_SECRET!, ALGO!);
 }

 export const verifyJwt = async (token:string) => {
    try {
        const payload = await verify(token, JWT_SECRET!, ALGO!);
    } catch (error) {
        
    }
    
 }


 import { decode } from 'hono/jwt'

// Decode the JWT token



const code = async () => {
    const tokenToDecode =  await sign({user:{
    name:"Sir",
    email:"emailly@gmail.com",
    id:"12345"}}, JWT_SECRET!, ALGO!);
const anserr = await verify(tokenToDecode,JWT_SECRET!, ALGO!);
const { header, payload } = decode(tokenToDecode);
console.log('Decoded Header:', header);
console.log('Decoded Payload:', anserr);
}

code();