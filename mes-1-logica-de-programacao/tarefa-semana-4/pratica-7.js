/*
Crie uma função em  que receba um objeto como 
parâmetro e imprima a lista de chaves que ele possui.
*/

function retornChaves(objeto){
    return Object.keys(objeto);
}

let objetoExemplo = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
  }

console.log(retornChaves(objetoExemplo));