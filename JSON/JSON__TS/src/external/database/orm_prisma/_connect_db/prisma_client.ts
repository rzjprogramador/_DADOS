import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export { prisma }

/*
POLO UNICO
NAO PRECISA DE SINGLETON ELE JA FAZ O CONNECT E DISCONNECT AUTOMATICAMENTE.

CHAMAR:
import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'
*/
