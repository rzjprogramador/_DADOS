import { UsuarioRepository } from '@src/modules/usuario/repositories/contracts/usuario_repository'

export class GetAllUsuariosService {

    constructor(private readonly usuarioRepositoryMongo: UsuarioRepository) {}

    async getAllUsuariosService() {
        return  await this.usuarioRepositoryMongo.getUsuarios()
    }
}