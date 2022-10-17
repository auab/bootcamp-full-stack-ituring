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