console.log("Trabalhando com listas");

//Situação agência de viagens
//Cidades em variáveis separadas
// const saoPaulo = `São Paulo`;
// const salvador = `Salvador`;
// const rioDeJaneiro = `Rio de Janeiro`;

//Criando uma lista (array)
const listaDeCidades = new Array(
    `São Paulo`,
    ` Salvador`, //dar o espaço para o momento de exibir com concatenação/interpolação
    ` Rio de Janeiro`,
)

//A palavra new é reservada, portanto, não pode ser usada fora do contexto dela, por exemplo
//let new = 2;


console.log("destinos possíveis: ");
//Exibindo as cidades com as variáveis separadas
// console.log(salvador, saoPaulo, rioDeJaneiro);

//Exibindo uma array
console.log(listaDeCidades);

//SINTAXE ARRAY
//const/let nomeVariavel = new Array(
// elementos...
//)

//ADICIONANDO ITENS NA ARRAY
listaDeCidades.push(` Curitiba`);
console.log(`Nova lista com Curitiba: `);
console.log(listaDeCidades);

//testando colocar a lista com interpolação e concatenação
console.log(`Colocando a lista com interpolação: ${listaDeCidades}`);
console.log("Testando colocar a lista com concatenação: "+ listaDeCidades);

//O .push() é uma função nativa do JS, então embora a lista seja constante, pode-se adicionar elementos
//Diferente de querer fazer uma nova atribuição, mudando seu tipo
//listaDeCidades = 2;
//ou fazer qualquer outra nova atribuição
// listaDeCidades = new Array(
//     `Capivara`
// );

//Removendo elementos
//Usa-se o .splice() para retirar um elemento

listaDeCidades.splice(0,1) //.splice(posição inicial do item, Quantidade de itens a saírem)
console.log(listaDeCidades);// Salvador, Rio de Janeiro, Curitiba

//Nota-se que quem saiu foi Sâo Paulo, pois uma array começa a contar do zero, não do 1, portanto, se fizermos
listaDeCidades.splice(2,1);
//Será retirado o valor Curitiba e não Rio de Janeiro, pois a contagem começa do zero, a partir dos itens existentes

console.log(`Lista com os itens removidos: ${listaDeCidades}`);

//Para exibir itens específicos, devemos colocar o número do item em [] depois do nome da array
//veja
listaDeCidades.push(` Curitiba`, ` Bahia`, ` Copacabana`, ` El Salvador`); // é possivel incluir mais de um item
console.log(`Nova lista `);
console.log(listaDeCidades);
console.log (listaDeCidades[1], listaDeCidades[3]); //Rio de Janeiro Bahia
//Assim, mostra-se os itens que quiser


