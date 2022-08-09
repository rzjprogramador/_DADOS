import { GetAllUsuariosController } from '@src/modules/usuario/usecases/get_all/get_all_usuarios_controller';
import { GetAllUsuariosService } from '@src/modules/usuario/usecases/get_all/get_all_usuario_service';
import { CreateUsuarioService } from '@src/modules/usuario/usecases/create_update_usuario/create_usuario_service'
import { UsuarioRepositoryMongo } from '@src/modules/usuario/usecases/_repositories/mongo_repository/usuario_repository_mongo'
import { CreateUsuarioController } from '@src/modules/usuario/usecases/create_update_usuario/create_usuario_controller'

// CONTROLE DE REPOSITORIO EM USO

const useUsuarioRepository = {
    MONGODB : new UsuarioRepositoryMongo()
}

// INJECOES

export const createUsuarioInject = () => {
    const createUsuarioRepositoy = useUsuarioRepository.MONGODB
    const createUsuarioService = new CreateUsuarioService(createUsuarioRepositoy)
    const createUsuarioController = new CreateUsuarioController(createUsuarioService)
    return createUsuarioController
}

export const getAllUsuariosInject = () => {
    const usuarioRepositoryMongo = useUsuarioRepository.MONGODB
    const getAllUsuarios = new GetAllUsuariosService(usuarioRepositoryMongo)
    const getAllUsuariosController = new GetAllUsuariosController(getAllUsuarios)
    return getAllUsuariosController
}
