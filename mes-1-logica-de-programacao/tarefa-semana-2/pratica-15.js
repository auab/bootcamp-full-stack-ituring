/*
No arquivo pratica-15.js, crie uma função que recebendo o peso (em kg) e 
altura (em metros) de uma pessoa como parâmetros, retorne o IMC de acordo 
com o seguinte cálculo: IMC = PESO / (ALTURA * ALTURA)

Teste a função de cálculo do IMC e veja se ela está funcionando corretamente

Ainda no arquivo pratica-15.js, agora crie uma outra função que vai receber 
o IMC como parâmetro e vai retornar os seguintes textos:

"Abaixo do Peso" -> IMC abaixo de 18.5
"Peso Normal" -> IMC entre 18.5 e 25
"Sobrepeso" -> IMC entre 25 e 30
"Obesidade" -> IMC maior que 30

Agora utilize as duas funções para, dado o peso e altura de uma pessoa, informar 
com console.log qual é a classificação resultante.
*/

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