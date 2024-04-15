console.log("Conversão de Tipos");

console.log ("ano " + 2020); //ano 2020
console.log("2" + "2"); //22 - concatenação (junção de dois tipos)

//Para converter textos em números 
//parse

console.log(parseInt("2")+parseInt("2")); // 4

//Usando outras operações com textos

console.log("10" / "2"); // 5
//Usando um operador aritmético diferente do '+', o JS faz a conversão de forma implícita

console.log("Ricardo" / "2")//Not a Number (NaN)
//O resultado saí NaN, porque ele tenta fazer a conversão, mas não consegue transformar em um número


//FLOAT - ponto flutuante
//O JS trabalha com casas decimais usando ponto flutuante
//Ao invés da ',' usa-se '.'

console.log("Ponto fluante "+ 7 / 2); //3.5
console.log("6,5"); // 6 5
//No JS, vírgula tem função própria

//parseInt - converte para um número inteiro
//parseFloat - converte para um número com casa decimal