
function calcularMediaArray(notas) {
  let soma = notas[0] + notas[1] + notas[2];
  return soma / 3;
}


function avaliarAluno(aluno) {
  let media = calcularMediaArray(aluno.notas);
  
  if (media >= 60) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}




let nomeUsuario = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));


let aluno = {
  nome: nomeUsuario,
  notas: [nota1, nota2, nota3]
};

let resultado = avaliarAluno(aluno);
console.log("O aluno " + aluno.nome + " está " + resultado);