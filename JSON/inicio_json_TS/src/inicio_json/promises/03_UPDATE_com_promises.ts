import { JSONEscrita } from './01_criacao_e_escrita_json_com_promises';
// AO INVES DE CALLBACKS VAMOS USAR PROMISES
import fs from 'fs'
import { JSONLeitura } from './02_leitura_arquivo_json_com_promises'

// UPDATE

export const JSONUpdate = (filePath: string, newData: any, enconding: any = 'utf-8') => {

    const promiseCallback = async (resolve: any, reject: any) => {

        try {
            const data: any = await JSONLeitura(filePath, enconding)

            const result = { ...data, ...newData }

            JSONEscrita(filePath, result, enconding)

            resolve(result)
        }

        catch(e) {
            reject(e)
        }
    }

    return new Promise(promiseCallback)
}

// USO
//
JSONUpdate('DB_Json/test_promise.json', { id: 1, nome: 'Nome Editado-1', campoNovo1: 'valor campo Novo1' }).then(console.log).catch(console.error)
