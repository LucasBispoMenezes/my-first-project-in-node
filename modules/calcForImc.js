function calcularIMC(kilos, altura) {
  altura = altura / 100;
  return (kilos / (altura * altura)).toFixed(2);
}


module.exports = calcularIMC;