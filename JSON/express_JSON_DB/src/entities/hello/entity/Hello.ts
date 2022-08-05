import { makeID } from '@src/globals/makers/maker_identificator'

export class Hello {
    id?: string
    nome: string
    email: string
    senha: string

    private constructor({ nome, email, senha }: Hello) {
        if(!this.id) {
            this.id = makeID()
        }
      return Object.assign(this, { nome, email, senha })
    }

    static create({ nome, email, senha }: Hello) {
      const hello = new Hello({ nome, email, senha })
      return hello
    }
  }