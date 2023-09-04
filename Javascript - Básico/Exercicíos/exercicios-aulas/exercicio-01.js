let nome = "Rafael";

let horaCompleta = new Date();
let hora = horaCompleta.getHours();
let periodo;

function verificarPeriodo(hora) {
  if (hora >= 0 & hora < 12) {
    periodo = "manhã"
  } else if (hora >= 12 & hora < 18) {
    periodo = "tarde"
  } else {
    periodo = "noite"
  }
}

verificarPeriodo(hora);
console.log(`Meu nome é ${nome} e estou aprendendo Javascript às ${hora} da ${periodo}.`);