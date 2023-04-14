let ingredientes =[
    'pão','feijao', 'farrofa', 'milho', 'ovo', 'compras','alho'
]

    let lista = document.querySelector('.lista');
    for( let index = 0 ; index < ingredientes.length; index +=1){
        
        let recebeIngredient = document.createElement ('li');
        lista.appendChild(recebeIngredient);
        recebeIngredient.innerText= ingredientes[index];
    }
    