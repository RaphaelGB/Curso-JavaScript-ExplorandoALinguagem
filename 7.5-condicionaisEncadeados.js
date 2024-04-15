console.log("Operadores lógicos encadeados");

const listaDeCidades = new Array(
    `São Paulo`,
    ` Salvador`,
    ` Rio de Janeiro`,
)

const idadeComprador = 17;
const estaAcompanhada = true; //Tipo boolean - true or false
const temPassagem = true;

console.log("destinos possíveis: ");

console.log(listaDeCidades);


//Fazendo if encadeado sem repetição com ou
    //Os operadores lógicos precisam tanto do lado esquerdo e direito precisam ser bool
if (idadeComprador >= 18 || estaAcompanhada) {
    
    console.log("Compra feita com sucesso");
    listaDeCidades.splice(1,1);
    console.log(listaDeCidades);
}
else {
    console.log("Não é maior de idade, não posso vender");
}

console.log("Embarque: \n\n"); // \n - pula linha
if(idadeComprador >= 18 && temPassagem){
    console.log("Boa viagem");
} else{
    console.log("Você não pode embarcar");
}


//Operadores lógicos
//Ou: || - se uma das afirmações forem verdadeiras, segue o código
//e: && - 
//