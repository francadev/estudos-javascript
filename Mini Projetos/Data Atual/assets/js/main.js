const dateDocument = document.querySelector('#date');

//funcao para encontrar o mês usando switch
function encontraSemana(n) {
  switch (n) {
    case 0:
      diaSemana = 'domingo';
      break;
    case 1:
      diaSemana = 'segunda-feira';
      break;
    case 2:
      diaSemana = 'terça-feira';
      break;
    case 3:
      diaSemana = 'quarta-feira';
      break;
    case 4:
      diaSemana = 'quinta-feira';
      break;
    case 5:
      diaSemana = 'sexta-feira';
      break;
    case 6:
      diaSemana = 'sábado';
      break;

    default:
      break;
  }
  return diaSemana;
}

//funcao para encontrar o mês usando lista
function encontraMes(n) {
  listaMes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  return listaMes[n];
}

const dateNow = new Date();
const day = encontraSemana(dateNow.getDay());
const date = dateNow.getDate();
const month = encontraMes(dateNow.getMonth());
const year = dateNow.getFullYear();
const hour = dateNow.getHours();
const min = dateNow.getMinutes();

dateDocument.innerHTML = `${day}, ${date} de ${month} de ${year} <br>${hour}:${min}`;