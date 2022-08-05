import fs from 'fs'

try {
    // LER O ARQUIVO EM UM CAMINHO
    const caminhoDado = fs.readFileSync('DB_Json/arquivo1.json', 'utf-8')

    // VER O TIPO DE DADO NO ARQUIVO - A CODIFICACAO UTF-8 VAI CRIAR DE INICIO : O FORMATO STRING
    console.log(typeof caminhoDado)

    // CONVERTER OS DADOS DO ARQUIVO PARA O FORMATO QUE PRECISO PRA FAZER ALGO >> NO CASO:: OBJETO
    const objCaminhoDado = JSON.parse(caminhoDado)

    // VER O TIPO DE DADO NO MOMENTO NO ARQUIVO
    console.log(typeof objCaminhoDado)

    // USAR FERRAMENTAS DISPONIVEIS NO TIPO DE DADO AGORA
    console.log(objCaminhoDado.nome)
}
catch(e) {
    console.log(e)
}

