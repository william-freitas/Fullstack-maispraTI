/*15. Fazer um algoritmo para receber um número decimal 
e o peso de cada número até que o usuário digite o número 0. 
Fazer a média ponderada desses números e pesos respectivos.*/


const prompt = require("prompt-sync")();

let notas = [];
let pesos = [];
let ponderada = 0;
let i = 0;

while (true) {
    let nota = parseFloat(prompt("Digite o número ou 0 para encerrar o programa: "));
    if (nota === 0) break;
    let peso = parseFloat(prompt("Digite o peso para média ponderada: "));
    
    notas.push(nota);
    pesos.push(peso);
    i++;
}

for (let j = 0; j < i; j++) {
    ponderada += notas[j] * pesos[j];
}

ponderada /= i;

console.log("A média ponderada dos números é: " + ponderada);