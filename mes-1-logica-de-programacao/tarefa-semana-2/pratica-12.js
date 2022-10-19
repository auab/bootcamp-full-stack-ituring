/*
Crie uma função que receba um número de 1 a 7 no arquivo pratica-12.js.
Caso esse parâmetro seja diferente do valor informado, exiba na tela O número 
${parâmetro} não é válido para dia de semana.
Caso o valor esteja entre os valores permitidos, siga a regra a seguir para 
apresentar o retorno:

01: Segunda
02: Terça
03: Quarta
04: Quinta
05: Sexta
06: Sábado
07: Domingo

*/

function numeroParaNomeDiaSemana(numeroDiaSemana){
    switch(numeroDiaSemana){
        case 1:
            return('Segunda');
        case 2:
            return('Terça');            
        case 3:
            return('Quarta');
        case 4:
            return('Quinta');    
        case 5:
            return('Sexta');
        case 6:
            return('Sabado');            
        case 7:
            return('Domingo');
        default:
            return(`O número ${numeroDiaSemana} não é válido para dia de semana`);     
    }
}

console.log(numeroParaNomeDiaSemana(1));

console.log(numeroParaNomeDiaSemana(2));

console.log(numeroParaNomeDiaSemana(10));