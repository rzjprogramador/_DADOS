import { Request, Response } from 'express'
import { GetAllUsuariosService } from '@src/modules/usuario/usecases/get_all/get_all_usuario_service'


export class GetAllUsuariosController {

    constructor(private readonly getAllUsuariosService: GetAllUsuariosService) {}

    async handle(req: Request, res: Response) {
        try {
            const usuarios = await this.getAllUsuariosService.getAllUsuariosService()
            return res.status(200).json(usuarios)
        }

        catch(e) {
            res.status(400).json(e)
        }
    }
}