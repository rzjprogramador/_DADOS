import { Router } from 'express'
import { Request, Response } from 'express'
import { createUsuarioInject, getAllUsuariosInject } from '@src/modules/usuario/inject/usuario_inject'


export const usuarioRoutes = Router()

// CRIAR
usuarioRoutes.post('/usuario-create-update', (req: Request, res: Response) => {
    return createUsuarioInject().handle(req, res)
})

usuarioRoutes.get('/usuarios', (req: Request, res: Response) => {
    return getAllUsuariosInject().handle(req, res)
})


