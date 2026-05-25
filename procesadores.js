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
    constructor(marca, linea, generacion, hilos, frecuencia, imagen){

        super(marca, linea, generacion, hilos, frecuencia,);

        // modificar atributos
        this.marca = marca.toUpperCase();
        this.hilos = hilos + " hilos"
        this.frecuencia = frecuencia + "GHz"
    
        this.imagen = imagen;
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
    4.7,
    "https://img.pccomponentes.com/pcblog/1727128800000/mejores-amd-ryzen-7000-comprar-5.jpg"
)
let intelProcesador = new NuevoProcesador(
    "intel",
    "Core i5",
    "14 Generacion",
    20,
    3.5,
    "https://c1.neweggimages.com/productimage/nb640/19-118-470-09.jpg"
     
)
let intelProcesador2 = new NuevoProcesador("intel", 
    "Core i7", 
    "14 Generacion", 
    28, 
    4.2,
    "https://c1.neweggimages.com/productimage/nb640/19-118-466-06.jpg"
);
let amdProcesador2 = new NuevoProcesador("amd", 
    "Ryzen 7", 
    "Serie 7000", 
    16, 
    4.5, 
    "https://i.ebayimg.com/images/g/lSUAAeSw2FtpN2r6/s-l225.jpg"
);

let amdProcesador3 = new NuevoProcesador("amd", 
    "Ryzen 9", 
    "Serie 7000", 
    24, 
    5.7,
    "https://i5.walmartimages.com/seo/AMD-Ryzen-9-9950X3D-4-3-GHz-16-core-32-threads-128-MB-cache-Socket-AM5-Box_e93ef900-ef47-4a19-a5af-52fc9eb4c202.f6e557d9c987089594771bbf3518d5b2.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
);

// agregamos los procesadores a una lista
var arregloProcesadores = [amdProcesador, intelProcesador, amdProcesador3, amdProcesador2, intelProcesador2];

// recorremos los procesadores
arregloProcesadores.forEach(p => {
    
    // creamos un div para cada procesador
    let tarjetaProcesadores = document.createElement("div"); 
    tarjetaProcesadores.innerHTML = `
    <img src="${p.imagen}" width="200"></img>
    <h3>Procesador: ${p.marca} ${p.linea}</h3>
    <h3>Generacion: ${p.generacion}</h3>
    <h3>Hilos: ${p.hilos}</h3>
    <h3>Frecuencia: ${p.frecuencia}</h3>
    `
   document.getElementById("contenedorCPU").appendChild(tarjetaProcesadores)
});