import { prisma } from '../src/external/database/orm_prisma/_connect_db/prisma_client'
import { clienteSeedMaker } from '../src/seeds/ClienteSeed'

async function main() {
  // TODOS OS GERADORES DE SEED DE CADA MODULO
  await clienteSeedMaker()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
