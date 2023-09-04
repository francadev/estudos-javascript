//é uma função construtura
const data = new Date
console.log(data.toString())

function addZero(n) {
  return n >= 10 ? n : `0${n}`;
}

function dataFormatada() {
  const dia = addZero(data.getDate());
  const mes = addZero(data.getMonth() + 1); //mes comeca em 0
  const ano = addZero(data.getFullYear());
  const hora = addZero(data.getHours());
  const min = addZero(data.getMinutes());
  const sec = addZero(data.getSeconds());

  return `${dia}:${mes}:${ano}  ${hora}:${min}:${sec}`;
}

console.log(dataFormatada());