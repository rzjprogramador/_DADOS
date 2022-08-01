// AO INVES DE CALLBACKS VAMOS USAR PROMISES
import fs from 'fs'

// CRIAR ARQUIVO JSON E ESCRITA
export const JSONLeitura = (filePath: string, enconding: any = 'utf-8') => {

    const promiseCallback = (resolve: any, reject: any) => {
        fs.readFile(filePath, enconding, (err: any, data: any) => {
            if(err) {
                reject(err)
                return
            }

            // SE DER CERTO TENTAR...
            try {
                const object = JSON.parse(data)
                resolve(object)
            }
            catch(e) {
                reject(e)
            }

        })
    }

    return new Promise(promiseCallback)
}

// USO
// VAMOS VISUALIZAR EM OBJETO O QUE HÁ NO ARQUIVO
JSONLeitura('DB_Json/test_promise.json').then(console.log).catch(console.error)