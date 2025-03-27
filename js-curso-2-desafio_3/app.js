// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// function calcularIMC(peso, altura) {
//   let imc = peso / (altura * altura);  
//   console.log(`O IMC é: ${imc.toFixed(2)}`);
// }
// calcularIMC(70, 1.75);



// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// function calcularFatorial(num) {
//   if (num < 0) {
//     return 'Número inválido. O fatorial não existe para números negativos.';
//   }
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   let resultado = 1;
//   for (let i = 2; i <= num; i++) {
//     resultado *= i;
//   } 
//   return alert(resultado);
// }
// calcularFatorial(5);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
// function converterDolar(valor) {
//     let cotacao = 4.80;
//     return alert(valor * cotacao);
// }
// converterDolar(16);


// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// function calcularSala(altura, largura) {
//   let area = altura * largura;
//     let perimetro = 2 * (altura + largura);
//     console.log(`Área da sala: ${area} m²`);
//     console.log(`Perímetro da sala: ${perimetro} metros`);
// }
// calcularSala(5, 7);


// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// function mostrarPerimetro(raio) {
//     let pi = 3.14;
//     let perimetro = 2 * pi * raio;
//     let area = pi * (raio * raio);
//     alert(`Perímetro: ${perimetro} unidades\nÁrea: ${area} unidades²`);
// }
// alert(mostrarPerimetro(10));

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// function tabuada(numero){
//   for(let i=0; i < 11; i++) {
//     let calculo = numero * i;
//     alert(`${numero} * ${i}  =  ${calculo}`);
//   }
// }
// tabuada(7);
