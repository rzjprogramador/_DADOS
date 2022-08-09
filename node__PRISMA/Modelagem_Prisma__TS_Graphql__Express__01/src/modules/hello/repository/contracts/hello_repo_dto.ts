

export type HelloDTO = {
    id?: string
    uid?: string | null

    helloNome: string
    nome: string
    email: string
    password: string
    tipoHello: string

    createdAt?: Date
    updatedAt?: Date
    ultimoLogin?: Date
}
