import { HelloDTO } from '@src/modules/hello/repository/contracts/hello_repo_dto'

export interface HelloRepository {

    createHello(data: HelloDTO): Promise<HelloDTO>
}