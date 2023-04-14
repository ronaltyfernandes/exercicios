let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma= 0;
let index=0;
let maior=0;
let contimpar=0;
    for(let index=0;index<numbers.length;index+=1){
        console.log(numbers[index]);
        soma=soma+numbers[index];
        
        contimpar=contimpar;

        if (numbers[index]>maior){
            maior= numbers[index];
        }
        if (numbers[index]%2>0)
            contimpar+=1;

        
    }
    console.log(soma)
let media=soma/ (numbers.length)
    console.log("a media foi de= "+media)
    console.log("o maior numero foi="+maior)
    console.log("tem "+contimpar+" numeros impares")

    if (media>20){
        console.log("a media é maior que 20")

    }
        else{
            console.log("a media é menor que 20")
        }