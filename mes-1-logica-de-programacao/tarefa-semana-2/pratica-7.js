/*
receba uma string como parâmetro representando um idioma 
(ex: "es" para espanhol, "pt" para português", "en" para 
inglês)

exiba na tela "Hello World!" em diferentes idiomas, para
pelo menos 3 idiomas

se nenhum idioma for informado, exiba "Olá, Mundo!" por padrão
*/

function bomDiaPoliglota(idioma){
    if (idioma ==='en')
        console.log('Hello world!');
    else if (idioma ==='ge')
        console.log('Hallo Welt!');
    else 
        console.log('Olá, Mundo!');
}
bomDiaPoliglota('pt');