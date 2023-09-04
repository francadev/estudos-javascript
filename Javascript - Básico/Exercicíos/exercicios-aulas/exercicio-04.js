const numero = Number(prompt("Digite um número"))
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto")

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: <b>${numero ** 0.5}</b></p>`
texto.innerHTML += `<p>É inteiro: <b>${Number.isInteger(numero)}</b></p>`
texto.innerHTML += `<p>É NaN: <b>${Number.isNaN(numero)}</b></p>`
texto.innerHTML += `<p>Arredondado para cima: <b>${Math.ceil(numero)}</b></p>`
texto.innerHTML += `<p>Arredondado para baixo: <b>${Math.floor(numero)}</b></p>`
texto.innerHTML += `<p>Arredondado com duas casas decimais: <b>${numero.toFixed(2)}</b></p>`