//Modulos externos criando arquivo package.json e package-lock.json

const minimist = require("minimist");

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome'];

const profissao = args['profissao'];

// console.log(nome, profissao)

//Imprindo a concatenação de duas váriaveis 

console.log(`O nome dele é ${nome} e a profissão dele é ${profissao}!`)