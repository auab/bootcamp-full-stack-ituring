/*
Nesta prática, você vai criar e chamar 3 funções no arquivo pratica-2.js que irão 
informar sobre a confirmação de recebimento de um produto por email. Essas 3 
funções deverão fazer o seguinte:

Função 1 - Receber o nome do comprador como parâmetro e exibir na tela a 

informação Olá, <nome do comprador>!.

Função 2 - Esta função deverá ter 3 parâmetros: nome do produto, nome de quem 
recebeu o produto e o endereço de entrega. Ela deverá exibir a seguinte 
informação na tela:

Fizemos a entrega do produto NomeDoProduto no endereço EnderecoDeEntrega com sucesso!
O seu produto foi recebido por: NomeDaPessoaQueRecebeuOProduto
Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.

Função 3 - Esta função terá 1 parâmetro: nome de quem enviou o email. Ela deverá exibir a seguinte informação na tela:

Atenciosamente,
NomeDaPessoaQueEnviouOEmail

*/

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