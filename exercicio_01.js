/*1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.*/

const prompt = require('prompt-sync')();

let celsius = parseInt(prompt("Temperatura em celsius: "));

let far = (celsius * 1.8) + 32;

console.log("Temperatura em Fahrenheit: "+far);