import { Router, Request, Response } from 'express'
import { HelloController } from '@src/modules/hello/express/hello_controller'

export const helloRoutes = Router()

helloRoutes.get('/inicio', (req: Request, res: Response) => {
    const message = { message: 'Hello Word - by HELLO-- 1 '}
    return res.status(200).json(message)
})

helloRoutes.post('/create-hello', HelloController.create)