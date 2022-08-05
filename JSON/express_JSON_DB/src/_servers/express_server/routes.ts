import { usuarioRoutes } from '@src/entities/usuario/express/usuario_routes'
import { produtoRoutes } from '@src/entities/produto/express/produto_routes'
import { helloRoutes } from '@src/entities/hello/express/hello_routes'

export const routes = [
    helloRoutes,
    usuarioRoutes,
    produtoRoutes,
]

