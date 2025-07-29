const prompt = require("prompt-sync")();

let ValordaConta = Number(prompt("Digite o Valor da conta : "));
let numeroClientes = Number(prompt("Digite quantas pessoas vão pagar : "));

let ValorporPessoas = ValordaConta / numeroClientes;

console.log(("Cada pessoa deverá pagar :") R$ValorporPessoas.toFixed(2));
