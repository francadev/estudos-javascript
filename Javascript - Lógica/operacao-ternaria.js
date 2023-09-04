const points = 1000;

const statusUsuario = points >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(statusUsuario);

const corUsuario = 'Preto';
const corPadrao = corUsuario || 'Azul';
console.log(corPadrao);