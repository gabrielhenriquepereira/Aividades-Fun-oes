// Usei const para definir nome idade e profiçao.return paraperguntar o nome e  etc da pessoa

function formatarPessoa(pessoa) {
  return `Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e trabalho como ${pessoa.profissao}.`;
}


const nomeUsuario = prompt("Digite o seu nome:");
const idadeUsuario = prompt("Digite a sua idade:");
const profissaoUsuario = prompt("Digite a sua profissão:");


const usuario = {
  nome: nomeUsuario,
  idade: idadeUsuario,
  profissao: profissaoUsuario
};


alert(formatarPessoa(usuario));