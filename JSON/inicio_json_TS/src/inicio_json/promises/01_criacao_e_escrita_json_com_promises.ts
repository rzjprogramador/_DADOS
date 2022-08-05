// AO INVES DE CALLBACKS VAMOS USAR PROMISES
import fs from 'fs'

// CRIAR ARQUIVO JSON E ESCRITA
export const JSONEscrita = (filePath: string, data: any, enconding: any = 'utf-8') => {

    const promiseCallback = (resolve: any, reject: any) => {
        fs.writeFile(filePath, JSON.stringify(data, null, 2), enconding, (err) => {
            if(err) {
                reject(err)
                return
            }

            resolve(true)
        })
    }

    return new Promise(promiseCallback)
}

// USO
JSONEscrita('DB_Json/test_promise.json', { nome: 'Reizao', idade: 44 }).then(console.log).catch(console.error)