/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, 
e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que 
leia o número de maçãs compradas, calcule e escreva o valor total da compra.*/

const prompt = require('prompt-sync')();

let macas = parseInt(prompt("Digite quantas maçãs foram compradas:"));

if (macas < 12){
    console.log("O valor da compra é: R$"+(0.30*macas));
    }
else {
    console.log("O valor da compra é: R$"+(0.25*macas));
}