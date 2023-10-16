// partindo de uma string
const json = '{"nome": "lau", "dn": "23/01/1990","genero": "f", "endereco":{"rua":"matriz", "n:":8, "uf":"DF"}, "cel": 67390287390}'

const obj = JSON.parse(json);

console.log(obj);


// alterações

obj.nome += " Sousa";
console.log(obj.nome); 

console.log(obj);


// acrescentando informações

obj.salario = 1000;
console.log(obj.salario);

console.log(obj);


// devolvendo a informação em string
const jsonString = JSON.stringify(obj);

console.log("string: ");
console.log(jsonString);