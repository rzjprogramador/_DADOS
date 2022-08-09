import { Request, Response } from 'express'

import { createHelloInject } from '@src/modules/hello/domain/usecases/create/inject_create_hello'

export const HelloController = {

    async create(req: Request, res: Response) {
        const dataBody = req.body
        try {
            const created = await createHelloInject().execute(dataBody)
            return res.status(201).json(created)
        }
        catch(e) {
            return res.status(400).json(e)
        }
    },

}