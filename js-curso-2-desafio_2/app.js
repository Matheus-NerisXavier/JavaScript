// Criar uma função que exibe "Olá, mundo!" no console.
function helloWord(){
  console.log('Olá, mundo!');
}
helloWord();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function helloName(nome){
  console.log(`Olá, ${nome}`);
}
helloName('Matheus Neris');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroDoNumero (number) {
  return number * 2;
}
console.log(dobroDoNumero(20));

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media (number1, number2, number3) {
  return (number1 + number2 + number3) / 3;
}
console.log(media(10,3,7));

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(number1, number2){
  return  number1 > number2  ? number1 : number2
}
console.log(maiorNumero(20,10));

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numberMultiplicacao (number) {
  return number * number;
}
console.log(numberMultiplicacao(7));