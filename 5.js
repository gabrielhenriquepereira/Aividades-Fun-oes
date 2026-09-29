// Achei díficil identar e tive varios erros de let
function receberElemento() {
    let quantidade = Number(prompt("Quantos elementos deseja adicionar?"))
    return quantidade
}

function percorerElementos(quantidade) {
    let elementos = []
    let qtds = quantidade
    for (let i = 0; i < qtds; i++) {
        let elemento = Number(prompt("Digite o elemento " + (i + 1) + ":"))
        elementos.push(elemento)
    }
    return elementos
}

function somarElementos(el) {
    let soma = 0
    for (let i = 0; i < el.length; i++) {
        soma += el[i]
    }
    return soma
}

function imprimirSoma(soma) {
    console.log(soma)
}

let quantidade = receberElemento()
let el = percorerElementos(quantidade)
let soma = somarElementos(el)
imprimirSoma(soma)










    