import { makeID, makeDate } from '@src/globals/makers/maker_identificator'

export class Usuario {
    id?: string
    uid?: string | null
    username: string
    nome: string
    email: string
    password: string
    tipoUser: string

    createdAt?: Date
    updatedAt?: Date 
    ultimoLogin?: Date

    private constructor({ username, nome, email, password, tipoUser }: Usuario) {
        if(!this.uid) { this.uid = makeID() }
        if(!this.createdAt) { this.createdAt = makeDate() }
        if(!this.updatedAt) { this.updatedAt = makeDate() }
        if(!this.ultimoLogin) { this.ultimoLogin = makeDate() }

        return Object.assign(this, { username, nome, email, password, tipoUser })
    }

    static create({ username, nome, email, password, tipoUser }: Usuario) {
      const data = new Usuario({ username, nome, email, password, tipoUser })
      return data
    }
  }
