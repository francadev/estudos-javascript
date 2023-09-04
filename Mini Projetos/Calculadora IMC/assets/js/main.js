function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    const imc = peso.value / (altura.value * altura.value);

    if (peso.value && altura.value && !isNaN(imc)) {
      let stringResultado = `Seu IMC é: ${imc.toFixed(2)} `;
      if (imc < 18.5) {
        stringResultado += "(Abaixo do peso)";
      } else if (imc >= 18.5 && imc < 24.9) {
        stringResultado += "(Peso normal)";
        console.log(stringResultado);
      } else if (imc >= 25 && imc < 29.9) {
        stringResultado += "(Sobrepeso)";
      } else if (imc >= 30 && imc < 34.9) {
        stringResultado += "(Obesidade grau 1)";
      } else if (imc >= 35 && imc < 39.9) {
        stringResultado += "(Obesidade grau 2)";
      } else {
        stringResultado += "(Obesidade grau 3)";
      };
      resultado.style.backgroundColor = '#c2ffe8';
      resultado.innerHTML = stringResultado;

    } else if (isNaN(peso.value)) {
      resultado.innerHTML = "Peso inválido!";
      resultado.style.backgroundColor = '#ffd4d7';

    } else if (isNaN(altura.value)) {
      resultado.innerHTML = "Altura inválida!";
      resultado.style.backgroundColor = '#ffd4d7';

    } else {
      resultado.innerHTML = "Preencha todos os campos!";
      resultado.style.backgroundColor = '#ffd4d7';
    }
  }
  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();