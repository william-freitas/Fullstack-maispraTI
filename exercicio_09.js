/*9. Escreva um algoritmo que leia o código de origem de um 
produto e imprima a região do mesmo, conforme a tabela abaixo:*/

const prompt = require('prompt-sync')();

let codigo = prompt("Digite o código do produto para saber sua origem: ");

switch (true){
    case codigo == 1 :
        console.log("Origem Sul");
        break;
    case codigo == 2 :
        console.log("Origem Norte");
        break;
    case codigo == 3 :
        console.log("Origem Leste");
        break;  
    case codigo == 4 :
        console.log("Origem Oeste");
        break; 
    case (codigo == 5 || codigo == 6):
        console.log("Origem Nordeste");
        break;
    case (codigo >= 7 && codigo <= 9):
        console.log("Origem Sudeste");
        break;
    case (codigo >= 10 && codigo <= 20):
        console.log("Origem Centro-Oeste");
        break;
    case (codigo >= 25 && codigo <= 50):
        console.log("Origem Nordeste");
        break;
    default:
        console.log("Produto Importado")
}
