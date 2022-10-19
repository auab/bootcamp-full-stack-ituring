/*
No arquivo pratica-14.js, crie uma função que recebendo o peso 
(em kg) e altura (em metros) de uma pessoa como parâmetros, 
retorne a classificação do IMC de acordo com o seguinte 
cálculo: IMC = PESO / (ALTURA * ALTURA)

A classificação deverá obedecer os seguintes critérios:

"Abaixo do Peso" -> IMC abaixo de 18.5
"Peso Normal" -> IMC entre 18.5 e 25
"Sobrepeso" -> IMC entre 25 e 30
"Obesidade" -> IMC maior que 30

A função deverá retornar um dos textos informados 
("Abaixo do Peso", "Peso Normal", etc)
*/

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