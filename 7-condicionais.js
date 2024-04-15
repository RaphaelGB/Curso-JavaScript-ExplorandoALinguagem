console.log("Trabalhando com listas");

const listaDeCidades = new Array(
    `São Paulo`,
    ` Salvador`,
    ` Rio de Janeiro`,
)

const idadeComprador = 17;
const estaAcompanhada = true; //Tipo boolean - true or false

console.log("destinos possíveis: ");

console.log(listaDeCidades);

//Usando operador lógico IF
//If (condição){
//      codigo }


// //If encadeado de forma não certa
// if (idadeComprador > 18) {

//     listaDeCidades.splice(1, 1);
//     console.log(`Compra da passagem para São Paulo com sucesso! ${listaDeCidades}`);
// }

// else {  //As chaves abrem blocos de código
//     //Esse else nos garante que a pessoa é menor de idade

//     if (estaAcompanhada) {

//         console.log("A pessoa está acompanhada");
//         listaDeCidades.splice(1, 1);

//     } else {
//         console.log("O comprador não é maior de idade, não pode comprar ");
//         console.log(listaDeCidades);
//     }
// }


//If encadeado de forma mais simples

if (idadeComprador > 18) {

    listaDeCidades.splice(1, 1);
    console.log(`Compra da passagem para São Paulo com sucesso! ${listaDeCidades}`);
} else if (estaAcompanhada) {

    console.log("A pessoa está acompanhada");
    listaDeCidades.splice(1, 1);
} else {
    console.log("O comprador não é maior de idade, não pode comprar ");
    console.log(listaDeCidades);
}


// Executa se o caso do comprador também for maior que 18, o que não é o ideal
// console.log("O comprador não é maior de idade, não pode comprar ");
// console.log(listaDeCidades);

// //Operadores relacionais
// console.log(idadeComprador > 18);  maior que
// console.log(idadeComprador < 18);  menor que
// console.log(idadeComprador >= 18);  maior que ou igual que
// console.log(idadeComprador <= 18);  menor que ou igual que

// //Operadores de igualdade ==
// console.log(idadeComprador == 18); '==' é para igualdade, pois '=' é para atribuição



