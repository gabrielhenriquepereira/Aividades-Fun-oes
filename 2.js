// usei if e else para identificar o numero e se é multiplica por 2
function ehPar() {
    let num = Number(prompt("Digite um número:"))
    
    if (num % 2 === 0) {
        alert("Seu número é par")
    } else {
        alert("Seu número é ímpar")
    }
}

ehPar()