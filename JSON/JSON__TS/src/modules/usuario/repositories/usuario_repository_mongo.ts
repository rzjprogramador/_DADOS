
import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'
import { Usuario } from '@src/modules/usuario/entity/Usuario.entity'
import { UsuarioRepository } from '@src/modules/usuario/repositories/contracts/usuario_repository'
import { CreateUsuarioDTO } from '@src/modules/usuario/repositories/contracts/create_usuario_dto'


export class UsuarioRepositoryMongo implements UsuarioRepository {

    async add(data: CreateUsuarioDTO): Promise<Usuario> {
        const usuario = await prisma.usuario.create({ data })
        return usuario
    }
}