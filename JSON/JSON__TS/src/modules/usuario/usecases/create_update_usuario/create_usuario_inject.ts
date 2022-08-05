import { CreateUsuarioService } from '@src/modules/usuario/usecases/create_update_usuario/create_usuario_service'
import { UsuarioRepositoryMongo } from '@src/modules/usuario/repositories/usuario_repository_mongo'
import { CreateUsuarioController } from '@src/modules/usuario/usecases/create_update_usuario/create_usuario_controller'


export const createUsuarioInject = () => {
    const createUsuarioRepositoy = new UsuarioRepositoryMongo()
    const createUsuarioService = new CreateUsuarioService(createUsuarioRepositoy)
    const createUsuarioController = new CreateUsuarioController(createUsuarioService)
    return createUsuarioController
}
