const prompt = require("prompt-sync")();

let distancia = Number(prompt("Informe a distância da viagem (km): "));
let consumo = Number(prompt("Informe o consumo do carro (km/l): "));
let precoGasolina = Number(prompt("Informe o preço da gasolina (R$/litro): "));

let litrosNecessarios = distancia / consumo;
let custoViagem = litrosNecessarios * precoGasolina;

console.log(`Serão necessários ${litrosNecessarios.toFixed(2)} litros`);
console.log(`A viagem custará R$${custoViagem.toFixed(2)}`);
