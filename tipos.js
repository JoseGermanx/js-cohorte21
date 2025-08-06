// tipos de datos

// string ""  ''   ``
let nombre = "Alberto"
let mensaje = 'Este es el mensaje de bienvenida ${nombre}'
let numers = `1234567890 ${nombre}`

// number
let edad = 44
let promedio = 6.7

// boolean
let esDeDia = false

// undefined
let apellido = undefined

// null --> None(python)

let direccion = null

console.log(typeof direccion)


// comparando tipos de datos

// la igual ==

// coherción de tipos de datos

// == compara el valor, no el tipo de dato
console.log(2 == "2")

// === compara el valor y el tipo de dato
console.log(2 === "2")

// true = 1  false = 0

console.log(true == 1)  // 1 == 1
console.log(true === 1)  // true === 1 -> false
console.log(true === true)
console.log(true === false)

console.log("hola" === "hola")
console.log("hola" == "ALMUERZO")