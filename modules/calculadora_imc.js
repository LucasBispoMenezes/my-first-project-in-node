const rl = require('readline-sync')
const imCalc = require('./calcForImc');
const main = require('./main');
const logo = `
**   ****     ****     ****** 
/**  /**/**   **/**    **////**
/**  /**//** ** /**   **    // 
/**  /** //***  /**  /**       
/**  /**  //*   /**  /**       
/**  /**   /    /**  //**    **
/**  /**        /**   //****** 
//   //         //     //////  
`

function imc() {
  console.log(logo);
  const name = rl.question('whats you name ? ');
  const wheight = rl.questionInt('whats you wheight (ex: 69) ? ');
  const height = rl.questionFloat('whats you height ? (ex: 190) ');
  const total = imCalc(wheight, height)
  const msg = `
olá ${name}, seu imc é ${total}.\n\n
Abaixo de 17        Muito abaixo do peso
Entre 17 e 18,49    Abaixo do peso
Entre 18,5 e 24,99  Peso normal
Entre 25 e 29,99    Acima do peso
Entre 30 e 34,99    Obesidade I
Entre 35 e 39,99    Obesidade II
`
  console.log(msg);
  if(!rl.keyInYN('deseja voltar ao menu ?')){
    process.exit(1)
  }else{
    main()
  }
}
module.exports = imc