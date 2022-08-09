import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'
import { HelloDTO } from '@src/modules/hello/repository/contracts/hello_repo_dto'
import { HelloRepository } from '@src/modules/hello/repository/contracts/hello_repository_protocol'

export class HelloRepositoryMongoPrisma implements HelloRepository {

    async createHello(data: HelloDTO) {
        const entityObj = await prisma.hello.create({ data })
        return entityObj
    }
}