//@ts-nocheck
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;
declare global {
  namespace nodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
}

export default prisma;
