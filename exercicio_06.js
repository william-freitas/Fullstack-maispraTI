/*6. Ler três valores para os lados de um triângulo: A, B e C. 
Verificar se os lados fornecidos formam realmente um triângulo. 
Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. 
Para verificar se os lados fornecidos formam triângulo: 
A < B + C e B < A + C e C < A + B 
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) 
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) 
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

const prompt = require('prompt-sync')();

let triangulo = Array();

while(true){
    triangulo[0] = parseInt(prompt("Digite o valor do lado A: "));
    triangulo[1] = parseInt(prompt("Digite o valor do lado B: "));
    triangulo[2] = parseInt(prompt("Digite o valor do lado C: "));

    if (triangulo[0] < triangulo[1] + triangulo[2] && 
        triangulo[1] < triangulo[2] + triangulo[0] &&
        triangulo[2] < triangulo[1] + triangulo[0] ){
            console.log ("As medidas formam um triangulo");
            break;
    }
    else{
            console.log ("As medidas não formam um triangulo");
    }
}

if (triangulo[0] == triangulo[1] && 
    triangulo[1] == triangulo[2] && 
    triangulo[2] == triangulo[0] ){
        console.log ("Triângulo equilátero");
}
else if (triangulo[0] != triangulo[1] && 
         triangulo[1] != triangulo[2] && 
         triangulo[2] != triangulo[0] ){
         console.log ("Triângulo escaleno");
}
else if  (triangulo[0] == triangulo[1] ||
          triangulo[1] == triangulo[2] || 
          triangulo[2] == triangulo[0] ){
          console.log ("Triângulo isósceles");
}