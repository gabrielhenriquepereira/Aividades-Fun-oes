function preencheAlunos(){
    const turma = []
    for(let i = 0; i < 4; i++){
        let aluno = {
            nome: prompt("Digite o nome do aluno"),
            nota: Number(prompt("Digite a nota do aluno ")+aluno.nome)
        }
        turma.push(aluno)
    }
    return turma
}

function verificarAprovacao(nota){
    if(nota >= 60){
        return true
    }else{
        return false
    }
}
function contarAprovados(turma){
   let totalAprovados = 0
   for(let aluno of turma){
        let retorno = verificarAprovacao(aluno.nota)
        if(retorno == true){
            totalAprovados++
        }
   }
    return totalAprovados
}

function executarAnalise(){
    let turma = preencheAlunos()
    let numeroAprovados = contarAprovados(turma)
    alert(numeroAprovados)
    
