/*13. Escrever um algoritmo que leia 5 valores para uma variável N e, 
para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma: 
1 x N = N 
2 x N = 2N 
3 x N = 3N */

const prompt = require('prompt-sync')();

let tab = Array();
tab[0] = parseInt(prompt("digite o primeiro numero para saber sua tabuada até ele: "));
tab[1] = parseInt(prompt("digite o segundo numero para saber sua tabuada até ele: "));
tab[2] = parseInt(prompt("digite o terceiro numero para saber sua tabuada até ele: "));
tab[3] = parseInt(prompt("digite o quarto numero para saber sua tabuada até ele: "));
tab[4] = parseInt(prompt("digite o quinto numero para saber sua tabuada até ele: "));

for ( let cont = 0; cont <= 4; cont++){
    for (let i = 1; i <= tab[cont]; i++){
        let resultado = i * tab[cont];
        console.log(i+" x "+tab[cont]+" = "+resultado);
    }
    console.log(" ");
}
