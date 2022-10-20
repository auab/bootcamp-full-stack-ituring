/*
Crie uma função  que recebendo como argumento um 
número inteiro maior que zero, retorne true se 
este número for primo e false se ele não for um 
número primo.
*/

function ehPrimo(n){
    for(i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

console.log(ehPrimo(17));
console.log(ehPrimo(2));
console.log(ehPrimo(7));
console.log(ehPrimo(8));
console.log(ehPrimo(5));
console.log(ehPrimo(23));
console.log(ehPrimo(15));
console.log(ehPrimo(1500450271));