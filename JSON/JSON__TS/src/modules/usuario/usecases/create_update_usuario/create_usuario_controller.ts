import { Request, Response } from 'express'
import { CreateUsuarioService } from '@src/modules/usuario/usecases/create_update_usuario/create_usuario_service'


export class CreateUsuarioController {

    constructor(
        private readonly createUsuarioService: CreateUsuarioService
    ) {}

    handle(req: Request, res: Response) {
        const { username, nome, email, password, tipoUser } = req.body
        try {
            this.createUsuarioService.execute({ username, nome, email, password, tipoUser })

            return res.status(201).send()
        }
        catch(err) {
            console.log('ERRO APONTADO >> ' + err)
        }

    }
}
// ...
