// Conceitos básicos sobre Arrays
// Indice       0         1        2
let frutas = ['maçã', 'banana', 'pera']
console.log(frutas.length)

// console.log(typeof(frutas))
// Métodos
// push -> acrescenta um elemento ao final do array
frutas.push('limão')
///console.log(frutas.length)
///console.log(frutas)

// unshift -> acrescenta um elemento ao inicio do array
frutas.unshift('goiaba')
///console.log(frutas.length)
///console.log(frutas)

// console.log(frutas[0,1])

//Interação do Array
///frutas.forEach(item => console.log(item))
frutas.forEach((item, index) => {
    //console.log(item)
    console.log(index, item)
})

/*
// pop -> deleta o último elemento array
fruas.pop()
console.log(frutas.length)
console.log(frutas)
*/