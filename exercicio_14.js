/*14. Fazer um algoritmo para receber números decimais até que 
o usuário digite 0 e fazer a média aritmética desses números.*/

const prompt = require('prompt-sync')();

let valor;
let media = 0;
let cont = 0;

while (valor != 0){
    valor = parseFloat(prompt("Digite um número: "));
    if (valor != 0){
        media += valor; 
        cont += 1;
    }
}
media = media / cont;
console.log("A média aritmética dos valores é: "+media);
