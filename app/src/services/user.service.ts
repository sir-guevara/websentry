import { CreateUserDto } from "../models/user.dto";
import prisma from "../utils/prisma";

export const signupService = async (data: CreateUserDto) => {
    const isUser = await prisma.user.findUnique({where:{email: data.email}});
    if(isUser){
        throw new Error("User already exists");
    }
    return  await prisma.user.create({
        data: { ...data },
  });
};


export const loginService = async (data:CreateUserDto) => {
    const user = await prisma.user.findUnique({where:{email: data.email}});
    if(!user){
        throw new Error("User not found");
    }
    return user
}