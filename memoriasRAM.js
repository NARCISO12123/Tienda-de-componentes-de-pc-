class MemoriaRAM {
    constructor(marca = "generica", frecuencia = "3200", capacidad = 4, tipoMemoria = "DDR4"){

        this.marca = marca;
        this.frecuencia = frecuencia;
        this.capacidad = capacidad;
        this.tipoMemoria = tipoMemoria;

    }
}

class MemoriaRAM01 extends MemoriaRAM {
    
    constructor(marca, frecuencia, capacidad, tipoMemoria){

        super(marca, frecuencia, capacidad, tipoMemoria)

        // modificar atributos
        this.capacidad = capacidad + " GB"
        this.frecuencia = frecuencia + " MHz"

    }

    info(){
        console.log(`Datos Memoria RAM: `)
        console.log(`Memoria: ${this.marca}`)
        console.log(`Capacidad: ${this.capacidad}`)
        console.log(`Frecuencia: ${this.frecuencia}`)
        console.log(`Tipo de memoria: ${this.tipoMemoria}`)
    }
}

let producto01 = new MemoriaRAM01(
       "Cosair Vengeance",
       "6000",
       32,
       "DDR5"   
)

console.log(" ")
producto01.info()
