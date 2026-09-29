function receberIMC(){
     let peso = Number(prompt("Digite o seu peso em kg:"))
     let altura = Number(prompt("Digite a altura em metros:"))
    calcularIMC(peso,altura)
}

function calcularIMC(peso,altura){
    let IMC = peso / (altura * altura)
    sairIMC(IMC)
}

function sairIMC(IMC){
    if (IMC < 18.5){
         console.log("Abaixo do peso")
        }
    else{
        if (IMC >= 18.5 && IMC < 24.9){
            console.log("Peso normal")
           }
           else{
            console.log("Sobrepesso")
           }
        }
}
receberIMC()