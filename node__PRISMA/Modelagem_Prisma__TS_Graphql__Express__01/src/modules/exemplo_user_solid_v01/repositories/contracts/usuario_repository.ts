import { Usuario } from '@src/modules/usuario/entity/Usuario.entity'
import { CreateUsuarioDTO } from '@src/modules/usuario/repositories/contracts/create_usuario_dto'

export interface UsuarioRepository {
    add(data: CreateUsuarioDTO): Promise<Usuario>
    getUsuarios(): Promise<Usuario[]>
}