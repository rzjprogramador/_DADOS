import 'module-alias/register'
import 'reflect-metadata'

import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './graphql_server/resolvers'
import typeDefs from './graphql_server/schemas'
import { routes } from './express_server/routes'
import { SERVER } from '@src/globals/env/enviroments'

const app = express()

app.use(express.json())

app.use(routes)

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return response.status(400).json(error.message)
  }

  return response.status(500).json(error)
})

app.listen(SERVER.PORT_DEV_REST, () => console.log(`SERVER ON => ${SERVER.PORT_DEV_REST}`))
