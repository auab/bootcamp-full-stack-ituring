function calculaIMC(peso,altura){
    return peso/(altura*altura)
}

function categorizaIMC(IMC){
    if (IMC < 18.5)
        return 'Abaixo do Peso';
    else if(IMC < 25)
        return 'Peso Normal';
    else if(IMC < 30)
        return 'Sobrepeso';
    return 'Obesidade';
}

console.log(categorizaIMC(calculaIMC(76,1.75)));
console.log(categorizaIMC(calculaIMC(100,1.65)));