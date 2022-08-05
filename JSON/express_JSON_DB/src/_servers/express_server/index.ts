import 'module-alias/register'
import express from 'express'
// import cors from 'cors'

import { ENV_SERVER } from '@src/globals/env/enviroments'
import { routes } from '@src/_servers/express_server/routes'


export const app = express()

// app.use(cors())  // TODO INSTALAR CORS

app.use(express.json())

app.use(routes)

app.listen(ENV_SERVER.PORT_EXPRESS || 4000, () => {
    console.log(`SERVER ON => ${ENV_SERVER.PORT_EXPRESS}`)
})
