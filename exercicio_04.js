/*4. Escreva um algoritmo para ler as notas das duas
avaliações de um aluno no semestre, calcular e escrever
a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’,
somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).*/

const prompt = require ('prompt-sync')();

let notas = Array();
let media = 0;

notas[0] = parseFloat(prompt("Digite a nota da primeira avaliação: "));
notas[1] = parseFloat(prompt("Digite a nota da segunda avaliação: "));

media = (notas[0] + notas[1]) / 2;

if (media >= 6.0){
    console.log("media: "+media+" PARABÉNS! Você foi aprovado")
}    
else {
    console.log("media: "+media+" Você foi REPROVADO! Estude mais");
}
