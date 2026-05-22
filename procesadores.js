class Procesador {
    constructor(marca, linea, generacion, hilos, frecuencia){
    this.marca = marca;
    this.linea = linea;
    this.generacion = generacion;
    this.hilos =  hilos;
    this.frecuencia = frecuencia;
}
}

class NuevoProcesador extends Procesador{

    // caracteristicas de las clases 
    // llamadas atributos
    constructor(marca, linea, generacion, hilos, frecuencia){

        super(marca, linea, generacion, hilos, frecuencia);

        // modificar atributos
        this.marca = marca.toUpperCase();
        this.hilos = hilos + " hilos"
        this.frecuencia = frecuencia + "GHz"
    
    }

    // metodo - una funcion dentro de la clase
    // puede definir comportamiento
    mostrarInfo(){
        console.log(`Datos del procesador: `)
        console.log(`Procesador: ${this.marca} ${this.linea}`)
        console.log(`Generacion: ${this.generacion}`)
        console.log(`hilos: ${this.hilos}`)
        console.log(`frecuencia: ${this.frecuencia}`)
        
    }
}

let amdProcesador = new NuevoProcesador(
    "amd",
    "Ryzen 5",
    "Serie 7000",
    12,
    4.7
)
let intelProcesador = new NuevoProcesador(
    "intel",
    "Core i5",
    "14 Generacion",
    20,
    3.5
)
amdProcesador.mostrarInfo();
console.log(" ")
intelProcesador.mostrarInfo();