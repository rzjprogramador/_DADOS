// import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client';
// import { Cliente } from '@src/models/Cliente'
// import { makeID } from '@src/globals/makers/maker_identificator'

// // METODO SEED QUE SERA CHAMADO NO SEED PRINCIPAL DO /PRISMA
// type ClienteSeed = Cliente

// export async function clienteSeedMaker() {
//   // .............................................
//   /* CADA USER SEED */
//   const clienteAdminSeed: ClienteSeed = await prisma.clientes.upsert({
//     where: { email: 'adminSedd@email.com' },
//     update: {},
//     create: {
//       nome: 'nomeADMINSedd',
//       email: 'emailADMINSedd@email.com',
//       password: 'passwordADMINSedd@email.com',
//       identificador: 'cnpjADMINSedd',
//       id: makeID(),
//     },
//   })
//   // .............................................
//   /* CADA cliente SEED */
//   const clienteDoisSeed: ClienteSeed = await prisma.clientes.upsert({
//     where: { email: 'doisSedd@email.com' },
//     update: {},
//     create: {
//       nome: 'nomeDoisSedd',
//       email: 'emailDoisSedd@email.com',
//       password: 'passwordDoisSedd@email.com',
//       identificador: 'cnpjDoisSedd',
//       id: makeID(),
//     },
//   })
//   // .............................................
//   // .............................................
//   /* CADA USER SEED */
//   const clienteTresSeed: ClienteSeed = await prisma.clientes.upsert({
//     where: { email: 'TresSedd@email.com' },
//     update: {},
//     create: {
//       nome: 'nomeTresSedd',
//       email: 'TresSedd@email.com',
//       password: 'passwordTresSedd@email.com',
//       identificador: 'cnpjTresSedd',
//       id: makeID(),
//     },
//   })
//   // .............................................
//   //
// }
