import { Hello } from '@src/modules/hello/domain/Hello.entity'

import { describe, it, expect } from 'vitest'

describe('Hello entity', () => {
    const collectionHello  = []

    const objRequest = {
        helloNome: 'any_helloNome',
        nome: 'any_nome',
        email: 'any_email',
        password: 'any_password',
        tipoHello: 'any_tipoHello',
    }

    const sut = Hello
    const created = sut.create(objRequest)


    it(`deve criar um objeto da Entidade Hello com campos opcionais preenchidos `, () => {
        console.log(created)

        collectionHello.push(created)

        expect( collectionHello.length ).toBe(1)
    })

    it(`nao deve retornar vazio campos opcionais do objeto hello `, () => {

        expect( created.uid ).not.toBe(undefined)
        expect( created.createdAt ).not.toBe(undefined)
        expect( created.updatedAt ).not.toBe(undefined)
        expect( created.ultimoLogin ).not.toBe(undefined)
    })



})