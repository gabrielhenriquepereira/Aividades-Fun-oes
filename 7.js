// Usei duas functions a primeira aplica o desconto caso o valor bruto do produto for mair que 100 reais.Na segundauseri if para acalcular os 10% de desconto fora das functios const para pedir e mostras o resultado final.
function aplicarDesconto(valor, percentual) {
    return valor - (valor * (percentual / 100));
}


function processarVenda(valorBruto, aplicarDescontoManual) {
   
    if (aplicarDescontoManual && valorBruto > 100) {
        return aplicarDesconto(valorBruto, 10);
    }
    return valorBruto;
}


const valorDigitado = parseFloat(prompt("Digite o valor bruto da venda:"));


const desejaDesconto = confirm("Se a venda for maior que R\$100, deseja aplicar os 10% de desconto?");


const valorFinal = processarVenda(valorDigitado, desejaDesconto);
alert(`O valor final da venda é: R$ ${valorFinal.toFixed(2)}`);