console.log("Trabalhando com loops");

const listaDeCidades = new Array(
    `São Paulo`,
    ` Salvador`,
    ` Rio de Janeiro`,
)
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagem = false;
let destinoExiste = false;
const destino = " Salvador";


console.log("\n Destinos possíveis: ");

console.log(listaDeCidades);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; // é possível guardar em uma variável o retorno de uma operação


let contador = 0;
while (contador < 3) {

    //Verificando se o destino do comprador existe 
    if (listaDeCidades[contador] == destino) {
        destinoExiste = true;
        break; //Na hora que chegar no break, o looping é interrompido
    }

    contador += 1;
}

console.log(`O destino existe: ${destinoExiste}`);



//SINTAXE WHILE
/*While (condição){
    código para repetir
    ...
    contador+1 ou -1
}


Breakpoint: executa até um momento do código
Precisa entrar no mode de debug no código
Nele, pode-se avançar para a próxima linha
Continua até o próximo breakpoint
Assistir (watch) a alteração de uma variável
Ver todas as variáveis globais e locais
*/

for( let i = 0; i < 3; i++) {

    //Verificando se o destino do comprador existe 
    if (listaDeCidades[i] == destino) {
        destinoExiste = true;
        break; //Na hora que chegar no break, o looping é interrompido
    }

}

//Sintaxe for
/*
for (contador; condição; incremento){
    código a ser repetido
}
Enquanto a condição for verdadeiro, o for é executado*/

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
} else{
    console.log("Desculpe, tivemos um erro!");
}
