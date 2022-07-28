const rl = require('readline-sync')
const process = require('process');


function main() {
  const img = `
▬▬▬.◙.▬▬▬
═▂▄▄▓▄▄▂
◢◤ █▀▀████▄▄▄▄▄▄◢◤
█▄ █ :) ██▀▀▀▀▀▀▀╬
◥█████◤
══╩══╩══
▬▬▬.tende ◙.tudo▬▬▬

qual função vc deseja usar ?
`
  console.log(img);
  const arrayFuncoes = ['calculadora de imc', 'sorteio numerico'];
  return rl.keyInSelect(arrayFuncoes, 'qual função', { cancel :'Sair'});
}

module.exports = main