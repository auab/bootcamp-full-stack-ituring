/*
No arquivo pratica-11.js, crie uma função que recebe uma cor escrita em texto 
como parâmetro e retorna o valor no formato RGB
As cores possíveis que a função poderá receber serão as seguintes:

"vermelha"
"laranja"
"amarela"
"verde"
"azul claro"
"azul marinho"
"rosa"

Para cada uma delas, a sua função deverá retornar o seguinte valor em string:

"vermelha" -> "rgb(255,0,0)"
"laranja" -> "rgb(255,128,0)"
"amarela" -> "rgb(255,255,0)"
"verde" -> "rgb(,255,)"
"azul claro" -> "rgb(0,255,255)"
"azul marinho" -> "rgb(0,0,255)"
"rosa" -> "rgb(255,0,255)"

Caso a cor informada no parâmetro não coincida com nenhuma das informadas, 
informe o seguinte valor padrão: "rgb(255,255,255)".
*/

function corNomeParaRGB(corNome){
    switch(corNome){
        case 'vermelha':
            return('rgb(255,0,0)');
        case 'laranja':
            return('rgb(255,128,0)');            
        case 'amarela':
            return('rgb(255,255,0)');
        case 'verde':
            return('rgb(0,255,0)');    
        case 'azul claro':
            return('rgb(0,255,255)');
        case 'azul marinho':
            return('rgb(0,0,255)');            
        case 'rosa':
            return('rgb(255,0,255)');
        default:
            return('rgb(255,255,255)');     
    }
}

console.log(`A cor vermelha em RGB é ${corNomeParaRGB('vermelha')}`);

console.log(`A cor rosa em RGB é ${corNomeParaRGB('rosa')}`);

console.log(`A cor banana em RGB é ${corNomeParaRGB('banana')}`);