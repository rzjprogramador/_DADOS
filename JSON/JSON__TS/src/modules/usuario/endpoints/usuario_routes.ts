import { Router } from 'express'
import { Request, Response } from 'express'
import { createUsuarioInject } from '@src/modules/usuario/usecases/create_update_usuario/create_usuario_inject'

export const usuarioRoutes = Router()

// CRIAR
usuarioRoutes.post('/usuario-create-update', (req: Request, res: Response) => {
    return createUsuarioInject().handle(req, res)
})
