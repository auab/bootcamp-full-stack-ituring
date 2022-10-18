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