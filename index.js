
const prompt = require('prompt-sync')()
// línea de comentario

/*
Son comenarios 
de mas de una linea
*/

let miVariable = "Hola, cohorte 21!" // declando la variable --> js asigna un tipo de dato undefined

console.log(miVariable)

miVariable = "Hola, mundo!" // reasignación de un valor

console.log(miVariable)


// prompt() en JS es el equivalente en el navegador a input() en Python

let name = prompt("Ingrese su nombre: ")

// f"Este es el texto de la variable {name}"

console.log(`El nombre de la persona es: ${name}`) // strings literales 2015 Es6
console.log("El nombre de la persona es: " + name)

console.log(typeof name)

