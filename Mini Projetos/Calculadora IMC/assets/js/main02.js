//capturar dados do form
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');
const peso = form.querySelector('.peso');
const altura = form.querySelector('.altura');
const listaIMC = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

//função para calculo do imc
function calculaIMC(p, a) {
  return (p / (a * a)).toFixed(2);
}

//função classificar o imc
function classificaIMC(n) {
  if (n < 18.5) {
    return listaIMC[0];
  } else if (n >= 18.5 && n < 24.9) {
    return listaIMC[1];
  } else if (n >= 25 && n < 29.9) {
    return listaIMC[2];
  } else if (n >= 30 && n < 34.9) {
    return listaIMC[3];
  } else if (n >= 35 && n < 39.9) {
    return listaIMC[3];
  } else {
    return listaIMC[5];
  };
}

//verifica as variáveis são validas para o cálculo
function isValid(n) {
  if (peso.value && altura.value && !isNaN(n)) {
    resultado.style.backgroundColor = '#c2ffe8';
    return true;

  } else {
    resultado.style.backgroundColor = '#ffd4d7';
    return false;
  }
}

//função caso inputs inválidos
function msgSeInvalido() {
  if (isNaN(peso.value) && isNaN(altura.value)) {
    return "Peso e altura inválidos!";

  } else if (isNaN(peso.value)) {
    return "Peso inválido!";

  } else if (isNaN(altura.value)) {
    return "Altura inválida!";

  } else {
    return "Preencha todos os campos!";
  }
}

//capturar evento de envio do formulário e função principal
function recebeEnvioForm(e) {
  e.preventDefault();

  const imc = calculaIMC(peso.value, altura.value);
  let resultadoCorreto = classificaIMC(imc);
  let resultadoInvalido = msgSeInvalido()

  if (isValid(imc)) {
    resultado.innerHTML = `Seu IMC é: <b>${imc} (${resultadoCorreto})`;
  } else {
    resultado.innerHTML = `Erro. ${resultadoInvalido}`
  }
}

//executa a função no lugar do envio do formulário
form.addEventListener('submit', recebeEnvioForm);