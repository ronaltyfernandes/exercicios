let pizzas={
    tipo:'catupiry',
    preco: 50,
    borda:'normal'
}   
    for (let key in pizzas){ //atravez do metodo key o sistema varre o objeto pizza assim como outro for
        console.log(pizzas[key]);//o metodo key indica que ele se refere as chaves apenas   
        console.log(pizzas.borda)
    }
