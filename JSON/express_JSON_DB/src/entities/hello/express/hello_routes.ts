import { getAll, saveNewContent } from '@src/domain/handlers/handlers_db'
import { makeID } from '@src/globals/makers/maker_identificator'
import { Router } from 'express'
import { Request, Response } from 'express'
import fs from 'fs'
import { Hello } from '@src/entities/hello/entity/Hello'

export const helloRoutes = Router()


const pathDB = 'data_json/Hellos.json'

// LER
helloRoutes.get("/hellos",(req: Request, res: Response) => {
    const conteudo = getAll(pathDB)
    res.status(200).json(conteudo)
})

// CRIAR
helloRoutes.post("/hellos",(req: Request, res: Response) => {
    const { nome, email, senha } = req.body
    const conteudoAtual = getAll(pathDB)

    const newData = Hello.create({ nome, email, senha })
    conteudoAtual.push(newData)
    saveNewContent(pathDB, conteudoAtual)
    res.status(200).json( newData)
})

// ATUALIZAR
helloRoutes.put("/hellos/:id",(req: Request, res: Response) => {
    const { id } = req.params
    const { nome, email, senha } = req.body
    const conteudoAtual = getAll(pathDB)

    const selectedItem = conteudoAtual.findIndex((item: any) => item.id === id)

    const { nome: cNome, email: cEmail, senha: cSenha } = conteudoAtual[selectedItem]

    const newObject = {
        id: id,
        nome: nome ? nome : cNome,
        email: email ? email : cEmail,
        senha: senha ? senha : cSenha
    }

    conteudoAtual[selectedItem] = newObject

    saveNewContent(pathDB, conteudoAtual)

    res.status(200).json(newObject)


})

