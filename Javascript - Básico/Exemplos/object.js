function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,

    fala() {
      console.log(`Oi, meu nome é ${this.nome}!`);
    },

    incrementaIdade() {
      this.idade++;
    }

  }
};
//ou
function criaPessoa2(nome, sobrenome, idade) {
  return {
    nome, sobrenome, idade,
    fala() {
      console.log("Oi!")
    }
  }
};

const pessoa1 = criaPessoa("Rafael", "Franca", 54)
pessoa1.fala()

const pessoa2 = criaPessoa2("João", "Silva", 24)
console.log(pessoa2.nome)
pessoa2.fala()