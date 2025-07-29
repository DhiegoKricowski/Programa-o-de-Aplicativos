const prompt = require("prompt-sync")();

let ValordoProduto = 120;
let Desconto = ValordoProduto * 0.15;
let ValorcomDesconto = ValordoProduto - Desconto;
let TaxadeEntrega = 10;
let ValorFinal = ValorcomDesconto + TaxadeEntrega;
console.log('Valor final do pedido :', ValorFinal.toFixed(2));