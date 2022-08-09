import { Hello } from '@src/modules/hello/domain/Hello.entity'
import { HelloRepository } from '@src/modules/hello/repository/contracts/hello_repository_protocol'


export class CreateHelloService {
    constructor(
        private readonly helloRepository: HelloRepository
    ) {}

    async execute(data: Hello) {
        // AQUI REGRAS ANTES DE ... CRIAR

        const entityService = Hello.create(data)
        return await this.helloRepository.createHello(entityService)
    }
}