import { createHelloInject } from '@src/modules/hello/domain/usecases/create/inject_create_hello'

type CreateHelloInput = {
    data: {
        helloNome: string
        nome: string
        email: string
        password: string
        tipoHello: string
    }

}

export async function createHello(_: any, { data }: CreateHelloInput) {
    const entityObj = await createHelloInject().execute(data)
    return entityObj
}
