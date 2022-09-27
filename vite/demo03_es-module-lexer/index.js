const { init, parse } = require('es-module-lexer')
const { readFileSync } = require('fs')
const path = require('path')

;(async () => {
  await init
  const code = readFileSync(path.resolve(__dirname, './im.js'), 'utf-8')
  const [imports, exports] = parse(code, 'optional-sourcename')
  console.log('results====', imports, exports)
})()