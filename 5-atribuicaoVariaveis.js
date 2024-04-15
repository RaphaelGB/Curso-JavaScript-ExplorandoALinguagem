console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
const nome = "Ricardo";
const sobrenome = "Bugan"; 

console.log(nome + sobrenome); //RicardoBugan

//Adicionando espaço entre strings
//console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);

//Interpolação de variáveis (`);

console.log(`Usanodo crases para concatenar as variáveis nome: ${nome} e sobrenome: ${sobrenome}`);

/*Tentando sobrescrever em uma variável constante
nome = nome + sobrenome //Não precisa declarar novamente uma variável, uma vez criada
TypeError: Assignment to constant variable.
Isso quer dizer que estamos tentando colocar um novo valor em uma variável constante
Isso não é possível, então o código dá erro
*/

//let - variáveis que podem ser sobrescritas
let nomeCompleto = "";
nomeCompleto = nome + sobrenome;
console.log(`meu nome é ${nomeCompleto}`); //Meu nome é Ricardo Bugan

//Pode-se mudar os tipos de variáveis, mas não é recomendado
//Exemplo
let carro = "Honda";
carro = 2024; //Mudou o tipo de texto para número

//Boa prática: nome das variáveis o mais descritivo possível