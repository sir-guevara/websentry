import { CreateMonitorDto } from "../models/monitor.dto";
import prisma from "../utils/prisma";



export const addMonitorService = async (data:CreateMonitorDto) => {
    return await prisma.monitor.create({
        data:{
            url:data.url,
            userId:data.userId
        }
    })
}


