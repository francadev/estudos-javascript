const arr = ["Rafael", "Lucy", "Natalia"]

console.log(arr)

arr.pop() //exclui o ultimo elemento
const removido = arr.shift() //exclui o primeiro elemento
console.log(`Elemento removido: ${removido}`)
arr.unshift('João') //add no inicio
arr.push('Maria') //add no final
arr[arr.length] = "Sandra" //add no final
console.log(arr)

console.log(arr.slice(0, -1)) //seleciona um intervalo do array