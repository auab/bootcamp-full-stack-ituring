/*
Utilize o arquivo pratica-3.js e implemente lá uma função 
que retorna um número aleatório entre 0 e 10000
*/

function numeroAleatorio(){
    let resultadoAleatorio = 1000*Math.random();
    return resultadoAleatorio;
}

console.log(numeroAleatorio());