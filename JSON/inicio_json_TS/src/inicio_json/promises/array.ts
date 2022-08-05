// //
// import { JSONLeitura } from './02_leitura_arquivo_json_com_promises'

// // CRIAR ARQUIVO JSON E ESCRITA
// export const JSONInsertData = (filePath: string, data: any, enconding: any = 'utf-8') => {

//     const promiseCallback = async (resolve: any, reject: any) => {

//         const promiseCallback = async (resolve: any, reject: any) => {

//             const arquivo: any = await JSONLeitura(filePath)
//             arquivo.push(data)

//                 resolve(true)
//             }
//         }

//         return new Promise(promiseCallback)
// }

// // USO
// JSONInsertData('DB_Json/array.json', { nome: 'Reizao3', idade: 44 }).then(console.log).catch(console.error)

// // [{ nome: 'Reizao', idade: 44 }]