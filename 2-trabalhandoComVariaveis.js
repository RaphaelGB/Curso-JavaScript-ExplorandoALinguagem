//JS é case sensitive
//Portanto, faz diferença variáveis de mesmo nome, mas letras maiúsculas e minúsculas
idade = 26;
Idade = 29;
console.log ("Idade: " +Idade)//mostra 29
console.log("idade: "+ idade);

//PS: não é uma boa prática manter duas variáveis de mesmo nome, mudando só a caixa alta delas

// deve-se criar variáveis com a declaração antes dela

nome = "Raphael"; //Variável para escopo global, com um texto (string)
const sobrenome = "Gomes"; //Com declaração, mais correta

//Deve-se sempre adotar um método para escrever suas variáveis, ou só maiúsculo, ou só minúsculo

// o "//" faz comentários que não serão lidos na execução do projeto

//Ele é fracamente tipado, então não pede o tipo da variável para cria-la
const casa = 2000;
const padaria = "bakery";
//Nesse caso, o const guarda tanto texto, número, entre outros.
