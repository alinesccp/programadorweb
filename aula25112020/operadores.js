// +, -, *, / e % (adição, subtração, multiplicação, divisão e módulo)
// + (concatenação)
// +, - (operadores unários)
// *, /

let texto1 = 'uma'
let texto2 = 'string'
console.log(texto1 + texto2)

let num1 = -8 -10
console.log(num1)

// Operadores de comparação (Retornam um booleano)
// =   -> Atribuição
let numAnon = 16
console.log(numAnon)
// Igualdade de valores
console.log(10 == '10')
//Igualdade de valor e tipo
console.log(20 === '20')
// Diferente comparação valor
console.log(10 != '10')
//Diferente comparação valore e tipo
console.log(10 !== '10')
/* &&
// Concatenação lógica 'e', é necessário que 
todos os testes sejam verdadeiros para 
retornar verdadeiro
/* ||
// Concatenação lógica 'ou', é necessário que
pelo menos um teste seja verdadeiro 
par que o resultado seja verdadeiro*/
let x = 10, y = '5'
if (x == 10 || y === 5) {
    console.log('Teste lógico verdadeiro')
} else {
    console.log('Teste lógico falso')
}

/* >, <, >=, <=
Comparação: maior do que; menor do que;
maior igual a; menor igual a */
let m = 10, n = 5
if (m > n) {
    console.log('sim')
} else {
    console.log('não')
}