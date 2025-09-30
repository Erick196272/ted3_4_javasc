function exibirResumo(valorTotal, valorFinal) {
    console.log("Resumo da Compra:");
    console.log("Valor total antes do desconto: R$ " + valorTotal.toFixed(2));
    console.log("Valor final com desconto: R$ " + valorFinal.toFixed(2));
}

let preco = parseFloat(prompt("Informe o preço do produto:"));
let quantidade = parseInt(prompt("Informe a quantidade desejada:"));

let valorTotal = preco * quantidade;
let desconto = valorTotal * 0.10; 
let valorFinal = valorTotal - desconto;


exibirResumo(valorTotal, valorFinal);
