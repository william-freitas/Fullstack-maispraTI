/*16. Escreva um algoritmo para imprimir os 50 primeiros números primos 
maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.*/


let i = 101;
let j = 0;
while (j < 50){
    if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || 
        i % 11 == 0 ||i % 13 == 0 || i % 17 == 0 || i % 19 == 0){
        i ++;
    }
    else{
        console.log(i+" é primo");
        i ++;
        j ++;
    }
}