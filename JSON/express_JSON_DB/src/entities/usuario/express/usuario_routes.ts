import { Router } from 'express'
import { Request, Response } from 'express'

export const usuarioRoutes = Router()

// ROTAS
usuarioRoutes.get("/usuarios",(req: Request, res: Response) => {
    res.send('GET Usuarios')
})

usuarioRoutes.post("/usuarios",(req: Request, res: Response) => {
    res.send('POST Usuarios')
})

usuarioRoutes.get("/usuarios/:usuario_id",(req: Request, res: Response) => {
    res.send('ID Usuarios')
})

usuarioRoutes.post("/session",(req: Request, res: Response) => {
    res.send('SESSAO Usuarios')
})

