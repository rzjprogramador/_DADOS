import fs from 'fs'


/* ---------------------- // ---------------------- */
/*  */
//
function lerTransformarObjeto(pasta: string, arquivo: string) {
    // LER O ARQUIVO E TRANSFORMAR EM STRING
    const arquivoRead = fs.readFileSync(`${pasta}/${arquivo}`, 'utf-8')

    // PEGAR O DADO EM STRIONG E CONVERTER APRA OBJETO
    const dadoObjeto = transformarEmObjeto(arquivoRead)
    // console.log(typeof dadoObjeto)
    return dadoObjeto
}


/* ---------------------- // ---------------------- */
/*  */
//

function transformarEmObjeto(dado: any) {
    const newObj = JSON.parse(dado)
    return newObj
}
// USO
const objetoArquivo1 =  lerTransformarObjeto('DB_Json', 'arquivo1.json')
// console.log(objetoArquivo1.nome)


/* ---------------------- // ---------------------- */
/*  */
//

// obs: VAI SOBREESCREVER O QUE ESTA LÁ
function escreverNoArquivo(arquivo: string, dado: any) {
    const gravado = fs.writeFileSync(arquivo, JSON.stringify(dado), 'utf-8')
    return gravado
}

// USO
const dado2 = { nome: 'Guga', idade: 12}

// escreverNoArquivo('DB_Json/arquivo1.json', dado2)


/* ---------------------- // ---------------------- */
/* UPDATE */
//
const filePath = 'DB_Json/arquivo1.json'
const enconding = 'utf-8'
const entityString = JSON.stringify(dado2, null, 2)

const updateFile = (filePath: string, updateData: any) => {
    const dataString = fs.readFileSync(filePath, 'utf-8')
    const dataObject = JSON.parse(dataString)

    const newDataObject = { ...dataObject, ...updateData }
    const newDataString = JSON.stringify(newDataObject, null, 2)

    fs.writeFileSync(filePath, entityString, newDataString, )

}

// USO

