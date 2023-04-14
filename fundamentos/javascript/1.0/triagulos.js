let lado1=9;
let lado2=7;
let lado3=8;
    function checkIntegerPositive(l1, l2, l3){
        if (l1>0 && l2>0 && l3>0){
            return true
        }
        else{
            return false
        }
    }
    function checkItsATriangle(l1,l2,l3){
        if (l1===l2===l3){
            return ("é um triangulo equilatero");
        }
        else if( l1!=l2 && l1!=l3 && l2!=l3){
            return("é um triagulo escaleno");
    }
        else {
            return ("é um triangulo isóceles")
        }}

        function checkPerimeterTriangle(l1,l2,l3){
            if (checkItsATriangle && checkIntegerPositive);
            perimetro=0;
            perimetro = l1 + l2 + l3;
            return("o perimetro foi de"+ perimetro);
        }
   


        console.log(checkPerimeterTriangle(lado1,lado2,lado3));
        