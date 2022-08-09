import { describe, it, expect } from 'vitest'

import { validNome, handleNome } from '@src/modules/hello/domain/helpers/handlers_validacao_hello'


describe('Handlers Validacao Hello', () => {

    it(`deve retornar false se o Client enviar quantidade insuficiente de texto em nome `, () => {
        const inputClientRequest = validNome('r')

        expect( inputClientRequest ).toBe(false)
    })

    it(`deve transformar em maiusculo o texto `, () => {
        const target = 'r'
        const testing = handleNome(target)

        expect( testing ).toBe('R')
    })

})