function cumprimentarComprador(nomeComprador){
    console.log(`Ola ${nomeComprador}!`);
}

function informarEntrega(nomeProduto,nomeRecebedor,enderecoEntrega){
    console.log(`Fizemos a entrega do produto ${nomeProduto} no endereço ${enderecoEntrega} com sucesso! `);
    console.log(`O seu produto foi recebido por: ${nomeRecebedor}`);
    console.log(`Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`);
}

function despedididaRemetente(nomeRemetente){
    console.log(`Atenciosamente \n${nomeRemetente}`);
}

cumprimentarComprador('Pedro');
informarEntrega('Computador Dell','Pedro','Avenida 9 de Julho');
despedididaRemetente('O atendente');