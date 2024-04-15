console.log("Meu Primeiro programa");
console.log(" 2 + 2 = " + (2+2));

//Como acessar o node
/*Powershell
> node
*/

//Como acessar a pasta
// 1 - ir até a pasta do arquivo
//POWERSHELL - cd "caminhoDoArquivo"

//2 - conferir o arquivos
//POWERSHELL > ls

//3 - Acessar o arquivo no node
// POWERSHELL > node .\nomeDoArquivo
//PS: Agilizar processo com Tab

//GUARDANDO DADOS EM VARIÁVEIS

console.log("O console.log imprime coisas no console");

const idade = 26; //idade 26 é um espaço guardado na memória com este nome

//Para imprimir
console.log(idade); //Imprime o valor dentro da variável
console.log("idade"); //Imrprime o texto

//Pode-se fazer contas com o que tem dentro da variável
console.log(idade+2); //Mostra o valor dentro da variável mais dois

//Pode=se também guardar em variáveis as contas e depois exibir
const idadeSomada = idade+2; //boa prática: variável com mais de uma palavra, a cada nova palavra coloca-se letra maiúscula
console.log("idade somada: "+idadeSomada);

//O terminal do node executa linha por linha
//Pode-se fazer qualquer operação aritmética
console.log("subtração " +idade-2);
console.log("Multiplicação " +idade*2);
console.log("Divisão " + idade/2);