/*3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro; 
● Triplique o valor do segundo inteiro; 
● Modifique o valor do terceiro inteiro para 12% do valor original; 
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) 
  dos primeiros três inteiros*/


const prompt = require ('prompt-sync')();

let elementos = Array();

elementos[0] = parseInt(prompt("Digite o primeiro número: "));
elementos[1] = parseInt(prompt("Digite o segundo número: "));
elementos[2] = parseInt(prompt("Digite o terceiro número: "));
elementos[3] = parseInt(prompt("Digite o quarto número: "));

console.log("Seus números digitados: "+elementos);

for (let i = 3; i >= 0; i--){
    switch (i) {
        case 3:
            elementos[3] = elementos[0] + elementos[1] + elementos[2];
             break;
        case 2:
            elementos[2] = elementos[2] * 0.12;
            break;
        case 1:
            elementos[1] = elementos[1] * 3;
            break;
        case 0:
            elementos[0] = elementos[0] + 25;
            break;
        }
}
console.log("Seus números alterados: "+elementos);