import { HelloRepositoryMongoPrisma } from '@src/modules/hello/repository/mongo_prisma/hello_repository_mongo_prisma'
import { CreateHelloService } from '@src/modules/hello/domain/usecases/create/create_hello_service'

// REPOSITORY EM USO

const useRepository = {
    MONGO_PRISMA: new HelloRepositoryMongoPrisma()
}

// INJECAO

export function createHelloInject() {
    const helloRepository = useRepository.MONGO_PRISMA // POLO UNICO MUDANCA REPO EM USO
    const createHelloService = new CreateHelloService(helloRepository)
    return createHelloService
}