
    

// función constructora  -->> construye objetos
function Student(nombre, rut, edad, activo) {
    this.name = nombre,
    this.rut = rut,
    this.age = edad,
    this.active = activo,
    this.gretting = function(){
        return ` Hello, ${this.name}`
    }
}

const student1 = new Student("Luis", "1234567-8", 25, true)

const student2 = new Student("Alberto", "12231234-8", 20, false)

console.log(student1.gretting())
console.log(student2.gretting())
