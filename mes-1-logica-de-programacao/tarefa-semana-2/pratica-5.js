let precoFinal = function(precoCheio, desconto){
    return precoCheio*(100-desconto)/100;
}

console.log(precoFinal(100,10));