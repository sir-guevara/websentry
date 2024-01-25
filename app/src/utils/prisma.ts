
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function checkConnection() {
    try {
      await prisma.$connect();
      console.log('Connection successful');
    } catch (error:any) {
      console.error('Connection failed:', error.message);
    } 
  }
  
  checkConnection();
export default prisma;