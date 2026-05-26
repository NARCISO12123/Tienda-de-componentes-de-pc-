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
    "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2841053-amd-ryzen-5-7600-x3d.jpg"
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
    "https://images.pcel.com/600/Hardware-Procesadores-AMD-100-100000592BOX-460320-6gW7Dop2e2YYPVNa.jpg"
);

let amdProcesador3 = new NuevoProcesador("amd", 
    "Ryzen 9", 
    "Serie 7000", 
    24, 
    5.7,
    "https://wuuju.co/cdn/shop/files/ProyectoQuitarfondo_7f29b8e5-df44-4489-abca-82ffbaeeae0c_768x768.png?v=1709757587%20768w,//wuuju.co/cdn/shop/files/ProyectoQuitarfondo_7f29b8e5-df44-4489-abca-82ffbaeeae0c_1024x1024.png?v=1709757587%201024w,//wuuju.co/cdn/shop/files/ProyectoQuitarfondo_7f29b8e5-df44-4489-abca-82ffbaeeae0c_1440x1440.png?v=1709757587%201440w"
);

// agregamos los procesadores a una lista
var arregloProcesadores = [amdProcesador, intelProcesador, amdProcesador3, amdProcesador2, intelProcesador2];

// recorremos los procesadores
arregloProcesadores.forEach(p => {
    
    // creamos un div para cada procesador
    let tarjetaProcesadores = document.createElement("div"); 
    tarjetaProcesadores.classList.add("tarjetaDisenio")

    tarjetaProcesadores.innerHTML = `
    <img src="${p.imagen}" width="200"></img>
    <h3>Procesador: ${p.marca} ${p.linea}</h3>
    <h3>Generacion: ${p.generacion}</h3>
    <h3>Hilos: ${p.hilos}</h3>
    <h3>Frecuencia: ${p.frecuencia}</h3>
    `
   document.getElementById("contenedorCPU").appendChild(tarjetaProcesadores)
});