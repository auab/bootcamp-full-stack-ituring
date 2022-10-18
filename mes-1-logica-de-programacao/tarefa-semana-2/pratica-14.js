function categorizaIMC(peso, altura){
    let IMC = peso/(altura*altura);
    if (IMC < 18.5)
        return 'Abaixo do Peso';
    else if(IMC < 25)
        return 'Peso Normal';
    else if(IMC < 30)
        return 'Sobrepeso';
    return 'Obesidade';
}

console.log(categorizaIMC(76,1.75));
console.log(categorizaIMC(100,1.65));