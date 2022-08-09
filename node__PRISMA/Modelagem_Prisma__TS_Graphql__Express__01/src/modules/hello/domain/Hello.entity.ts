import { makeID, makeDate } from '@src/globals/makers/maker_identificator'
import { validNome, handleNome } from '@src/modules/hello/domain/helpers/handlers_validacao_hello'

export class Hello {
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

    private constructor({ helloNome, nome, email, password, tipoHello }: Hello) {
        // VALORES AUTOA,TICOS AOS CAMPOS OPCIONAIS
        !this.uid ? this.uid = makeID() : this.uid = null
        !this.createdAt ? this.createdAt = makeDate() : this.createdAt = undefined
        !this.updatedAt ? this.updatedAt = makeDate() : this.updatedAt = undefined
        !this.ultimoLogin ? this.ultimoLogin = makeDate() : this.ultimoLogin = undefined

        return Object.assign(this, { helloNome, nome, email, password, tipoHello })
    }

    static create({ helloNome, nome, email, password, tipoHello }: Hello) {
        // VALIDACAO
        if (!validNome(nome)) { throw new Error('Ops') }
        nome = handleNome(nome)

        // CRIACAO
      const objEntity = new Hello({ helloNome, nome, email, password, tipoHello })
      return objEntity
    }
  }
