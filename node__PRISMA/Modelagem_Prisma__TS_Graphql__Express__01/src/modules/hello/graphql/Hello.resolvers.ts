import { createHello } from '@src/modules/hello/graphql/handlers/create_hello'

const HelloResolvers = {
    Query: {
        inicio: () => `Hello Inicio`
    },

    Mutation: {
        createHello,
    }
}


// PARA SER ACEITO O MODULO RESOLVERS TEM QUE SER EXPORTADO POR DEFAULT
export default HelloResolvers