import { Usuario } from '@src/modules/usuario/entity/Usuario.entity'
import { UsuarioRepository } from '@src/modules/usuario/repositories/contracts/usuario_repository'
import { CreateUsuarioDTO } from '@src/modules/usuario/repositories/contracts/create_usuario_dto'

export class CreateUsuarioService {
    constructor(private readonly usuarioRepository: UsuarioRepository) {}

    async execute(data: CreateUsuarioDTO) {
        const newData = Usuario.create(data)
        this.usuarioRepository.add(newData)
    }
}