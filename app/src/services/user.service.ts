import { CreateUserDto } from "../models/user.dto";
import prisma from "../utils/prisma";

export const signupService = async (data: CreateUserDto) => {
    const isUser = await prisma.user.findUnique({where:{email: data.email}});
    if(isUser){
        throw new Error("User already exists");
    }
    const hash = await Bun.password.hash(data.password);
    return  await prisma.user.create({
        data: { email: data.email, password: hash},
  });
};


export const loginService = async (data:CreateUserDto) => {
    const user = await prisma.user.findUnique({where:{email: data.email}});
    if(!user){
        throw new Error("User not found");
    }
    const isMatch = await Bun.password.verify(data.password, user.password);
    if(!isMatch){
        throw new Error("Invalid password");
    }
    const  {password, ...profile } = user;
    return profile
}


