import fs from 'fs'

// LER ARQUIVO JSON
export function getAll(path: string) {
    const conteudo = fs.readFileSync(path, 'utf-8')
    return JSON.parse(conteudo)
}

export function saveNewContent(path: string, conteudo: any) {
    const updateFile = JSON.stringify(conteudo)
    fs.writeFileSync( path, updateFile, 'utf-8' )
}