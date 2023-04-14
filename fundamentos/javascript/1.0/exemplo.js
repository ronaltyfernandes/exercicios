const printName = function () { //função normal sem os operadores ternarios
    const myName = 'Lucas';
    return myName;
  };
  console.log(printName());


const printName = () => 'Lucas'; // veja como o codigo torna-se mais simple usando os arrows
console.log(printName());