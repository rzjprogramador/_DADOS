import { Router } from 'express'
import { Request, Response } from 'express'

export const produtoRoutes = Router()

// CRIAR
produtoRoutes.post("/produtos/:usuario_id",(req: Request, res: Response) => {
    res.send('CRIA Produto')
})

// ATUALIZAR ESPECIFICO
produtoRoutes.patch("/produtos/:usuario_id/:produto_id",(req: Request, res: Response) => {
    res.send('DELETE Produto')
})

// DELETAR
produtoRoutes.delete("/produtos/:usuario_id/:produto_id",(req: Request, res: Response) => {
    res.send('DELETE Produto')
})

// LISTAR POR USUARIO
produtoRoutes.get("/produtos/:usuario_id",(req: Request, res: Response) => {
    res.send('LISTA Produto')
})

// MOSTRAR ESPECIFICO
produtoRoutes.get("/produtos/:produto_id",(req: Request, res: Response) => {
    res.send('ESPECIFICO Produto')
})

// LISTAR TODOS
produtoRoutes.get("/produtos",(req: Request, res: Response) => {
    res.send('LISTA Produto')
})


