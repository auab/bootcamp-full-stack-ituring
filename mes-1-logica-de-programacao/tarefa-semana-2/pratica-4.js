function aplicarDesconto(precoCheio, desconto){
    return precoCheio*(100-desconto)/100;
}

console.log(aplicarDesconto(100,10));