let saldo=100;

function somasaldo(valor){
    return saldo+valor;
};
function subitraisaldo(valor){
    return saldo-valor;
};
function multiplicasaldo(valor){
    return saldo*valor;
};
function dividesaldo(valor){
    return saldo/valor;
};
console.log(somasaldo(300));
console.log("o saldo agora é de "+somasaldo);