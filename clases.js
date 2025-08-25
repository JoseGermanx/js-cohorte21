
// vehículo

class Vehiculo {

    // se definen las propiedades del objeto
    constructor(marca, modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this._velocidad = 0;
    }

    // se definen los métodos del objeto
    getInfo(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}`
    }

    acelerar(){
        this._velocidad += 10;
    }

    frenar(){
        this._velocidad -= 10;
    }

    // getter  -> obtener
    get velocidad() {
        return this._velocidad;
    }

    //setter ->> modificar algún valor
    set velocidad(valor){
        this._velocidad = valor;
    }

}

// instanciar 
const kia = new Vehiculo("Kia", "Rio", "Rojo")
const toyota = new Vehiculo("Toyota", "4Runner", "Negro")

console.log(kia.velocidad) // partio con velocidad inicial --> 0

kia.acelerar()
console.log(kia.velocidad)
