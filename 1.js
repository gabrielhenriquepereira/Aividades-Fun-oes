//Comecei com uma function para calcular a área com os valores de altura e base. Em seguida mais um function para receber ambas usando let e demorei pra fezer mas não achei dificil ,apenas questao de corrigir erros.
function calcularAreaRetangulo(a, b) {
    let area = (a * b)
    return area

}
function receberBaseAltura(){

    let a = Number(prompt("Digite a altura"))
    let b = Number(prompt("Digite a base"))

    let area = calcularAreaRetangulo(a, b)
    alert(`A area do retangulo é ${area}`)
    }


receberBaseAltura()
calcularAreaRetangulo()