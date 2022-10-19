/*
Crie uma função no arquivo pratica-8.js que receberá um 
número como parâmetro e deverá, a partir do valor de 
entrada, verificar e retornar se o número é ímpar ou par.

Caso o número seja par, exiba na tela O número ${numero} é par

Caso o número seja ímpar, exiba na tela O número ${numero} é ímpar
*/

function ehpar(numero){
    if(numero%2==0)
        console.log(`o ${numero} é par`);
    else
        console.log(`o ${numero} é ímpar`);
}

ehpar(2);
ehpar(3);