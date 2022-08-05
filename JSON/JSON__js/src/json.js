// import fs from 'fs'
// import path from 'path'
import * as fs from 'fs'
// import * as path from 'path'
// const path = require('path')
const dado1 = require('./dados1.js')

// SALVAR ONDE
const saveTo = ('DBjson01.json')
const dado1 = 

fs.writeFileSync(saveTo, JSON.stringify(dado1, null, 2) )


