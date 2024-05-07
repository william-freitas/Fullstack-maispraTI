/*2. Escreva um algoritmo para ler o número de eleitores de um município,
 o número de votos brancos, nulos e válidos. Calcular e escrever o percentual 
 que cada um representa em relação ao total de eleitores.*/

 const prompt = require ('prompt-sync')();

/* let votosTotais = parseInt(prompt("Quantidade de eleitores: "));
 let votosBrancos = parseInt(prompt("Quantidade de votos brancos: "));
 let votosNulos = parseInt(prompt("Quantidade de votos nulos: "));
 let votosValidos = parseInt(prompt("Quantidade de votos válidos: "))*/

 let votos = Array();
  votos['totais'] = Array()
  votos['brancos'] = Array();
  votos['nulos'] = Array();
  votos['validos'] = Array();

  votos['totais'][0] = parseInt(prompt("Quantidade de eleitores: "));
  votos['brancos'][0] = parseInt(prompt("Quantidade de votos brancos: "));
  votos['nulos'][0] = parseInt(prompt("Quantidade de votos nulos: "));
  votos['validos'][0] = parseInt(prompt("Quantidade de votos válidos: "));

  votos['brancos'][1] = (votos['brancos'][0] / votos['totais'][0]) * 100;
  console.log(votos['brancos'][1]+" (percentual de votos brancos)")
  votos['nulos'][1] = (votos['nulos'][0] /  votos['totais'][0]) * 100;
  console.log(votos['nulos'][1]+" (percentual de votos brancos)")
  votos['validos'][1] = (votos['validos'][0] / votos['totais'][0]) * 100;
  console.log(votos['validos'][1]+" (percentual de votos brancos)")
 
  