// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarConsole () {
  console.log('O botão foi clicado');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function verificarAlert () {
  alert('Eu amo JS');
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function verificarPrompt () {
  let cidade = prompt('Digite o nome de uma cidade do Brasil');
  alert(`Estive em ${cidade} e lembrei de você`);
}

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function verificarSoma () {
  let numero1 = Number(prompt('Digite o primeiro número para a realizar a soma'));
  let numero2 = Number(prompt('Digite o segundo número para a realizar a soma'));

  alert(`O resultado da soma entre o número ${numero1} e o número ${numero2} é de ${numero1 + numero2}`);
}

