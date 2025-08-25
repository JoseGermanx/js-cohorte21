
// Se utiliza el bucle while cuando no se tiene certeza del punto de corte.
// Se utiiza el bucle for cuando se conocen la cantidad de interaciones


let count = 0

while (count < 5 ) {
    //console.log(count)
    count++ //count = count + 1
}

// for --> realizar iteraciones dependiendo de un lista (contador)

// Imprimir los id de los estudiantes --> 40
let estudiantes = ["José", "Alberto", "Diana", "Juan"]
estudiantes.push("Valeria")

// los arrays tienen un método para medir su logitud -> length

for (let i=0; i < estudiantes.length; i++) {
    console.log(estudiantes[i])
}


