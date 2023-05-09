const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
  }
};
const sum = (value1, value2) => {
  // o `try` vai executar a função verifyNumber e retornar a soma, caso os parâmetros sejam números
  try { 
    verifyIsNumber(value1, value2);
    return value1 + value2;
  // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada por meio da propriedade `.message` nativa do objeto Error.
  } catch (error) {
    return error.message;
  }
};
const verifica3 = (value1, value2) => {
    if (value1 === 3 || value2 === 3 ){
        throw new Error('nao pode aceitar o value 3');
    }
} 
const olha3 = (value1, value2) => {
    try {
        verifica3(value1, value2);
        return value1 + value2;
    } catch (error) {
        return error.message
        
    }
}


console.log(sum(3, 2));
console.log(olha3(3, 2));