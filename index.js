const main = require('./modules/main')
const imc = require('./modules/calculadora_imc')
const pc = require('process')

switch (main()) {
  case -1:
    return process.on('beforeExit', (code) => console.log('tchau volte sempre'))
    case 0:
      imc()
    case 1:
  default:
    break;
}