let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];

console.log("Terceiro nome:", nomes[2]);

nomes.push("Fernanda");
nomes.unshift("Gabriel");
console.log("Array após adicionar nomes:", nomes);

nomes.pop();
console.log("Array após remover o último nome:", nomes);

let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log("Valores dobrados:", dobrados);

let valores = [1, 3, 5, 7, 9];
let maioresQueCinco = valores.filter(num => num > 5);
console.log("Números maiores que 5:", maioresQueCinco);