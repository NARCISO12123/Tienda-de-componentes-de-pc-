class MemoriaRAM {
    constructor(marca = "generica", frecuencia = "3200", capacidad = 4, tipoMemoria = "DDR4"){

        this.marca = marca;
        this.frecuencia = frecuencia;
        this.capacidad = capacidad;
        this.tipoMemoria = tipoMemoria;

    }
}

class MemoriaRAM01 extends MemoriaRAM {
    
    constructor(marca, frecuencia, capacidad, tipoMemoria, imagen){

        super(marca, frecuencia, capacidad, tipoMemoria)

        // modificar atributos
        this.capacidad = capacidad + " GB"
        this.frecuencia = frecuencia + " MHz"
        this.imagen = imagen

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
       "DDR5",
       "https://c1.neweggimages.com/productimage/nb300/20-236-879-03.jpg"
)

let producto02 = new MemoriaRAM01(
    "Acclamator",
    "6000",
    16,
    "DDR5",
    "https://c1.neweggimages.com/productimage/nb300/BXG6D24123003GBSH0F.jpg"
)
let producto03 = new MemoriaRAM01(
    "Corsair Vengeance",
    "5600",
    32,
    "DDR5",
    "https://c1.neweggimages.com/productimage/nb640/20-236-887-01.jpg"
)

let producto04 = new MemoriaRAM01(
    "Kingston Fury Beast",
    "5200",
    16,
    "DDR5",
    "https://c1.neweggimages.com/productimage/nb300/A0ZXD2409040WVUXY21.jpg"
)

let producto05 = new MemoriaRAM01(
    "G.Skill Trident Z5",
    "6400",
    32,
    "DDR5",
    "https://i.ebayimg.com/images/g/-Q4AAOSwgdFjvtm8/s-l225.jpg"
)
let arreglo = [producto01, producto02, producto03, producto04, producto05]

arreglo.forEach(Mr => {
   
    let tarjetaMemoriaRam = document.createElement("div");

    tarjetaMemoriaRam.innerHTML = `
    <img src="${Mr.imagen}" width="200"></img>
    <h3>Marca: ${Mr.marca}</h3>
    <h3>Capacidad: ${Mr.capacidad}</h3>
    <h3>Frecuencia: ${Mr.frecuencia}</h3>
    <h3>Tipo de memoria: ${Mr.tipoMemoria}</h3>`
   document.getElementById("contenedorRAM").appendChild(tarjetaMemoriaRam)
})