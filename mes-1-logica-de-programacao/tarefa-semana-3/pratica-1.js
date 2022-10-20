/*
Este problema nós trabalhamos em aula: criar uma tabuada. Crie uma função 
que receba apenas 1 argumento de entrada: o número que você utilizará para 
fazer a tabuada
Nossa tabuada deverá ir de 1 ao 10
Neste problema, você deverá utilizar o comando while
*/

function tabuada(numero){
    console.log(`Tabuada de ${numero}`);
    let i=1
    while(i<=10){
        console.log(`${numero} x ${i} = ${numero*i}`);
        i++;
    }
}

tabuada(8);