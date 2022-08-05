import { Usuario } from '@src/modules/usuario/entity/Usuario.entity'

export type CreateUsuarioDTO = Usuario


// EXPORTANDO DOS TIPOS DO PRISMA SE PRECISAR:
// SÓ NAO PRECISOU PORQUE ADICIONEI | null nas props opcionais na classe da entidade
// import { Prisma } from '@prisma/client'
// export type CreateUsuarioDTO = Prisma.UsuarioCreateInput
