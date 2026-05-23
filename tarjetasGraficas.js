// objecto de la grafica 

class TarjetaGraficas {
    // atributos de la clase 
    // caracteristicas.

    constructor(marca, anioDeSalida, modelo, cantidadDeMemoria){
        this.marca = marca;
        this.anioDeSalida = anioDeSalida;
        this.modelo = modelo
        this.cantidadDeMemoria = cantidadDeMemoria;
    }
}

// clase que hereda del construtor
class NuevaGrafica extends TarjetaGraficas {
    
    constructor(marca, anioDeSalida, modelo, cantidadDeMemoria, rgb){
        
        // heredad atributos
        super(marca, anioDeSalida, modelo, cantidadDeMemoria);

        // crear nuevo atributo
        this.rgb = rgb;

        // modificar atributos heredados
        this.marca = marca.toUpperCase()
        this.modelo = modelo.toUpperCase();
        this.cantidadDeMemoria = cantidadDeMemoria + " GB"
    }

    info(){
        console.log("Datos de la grafica: ")
        console.log(`Grafica: ${this.marca} ${this.modelo}`)
        console.log(`anios: ${this.anioDeSalida}`)
        console.log(`Memoria VRAM: ${this.cantidadDeMemoria}`)
        
        if(this.rgb == true){
            console.log(`RGB: Sip`)
        
        } else{
            console.log(`RGB: Nop`)
        }
        
    }
}

// Tarjetas graficas disponibles
let grafica = new NuevaGrafica(
    "nvidia",
    2025,
    "rtx 5080",
    16,
    true

)

let graficaAMD = new NuevaGrafica(
    "amd", 
    2025,
    "rx 7900 xt",
    32,
    false

)

let graficas = [grafica, graficaAMD];

// crea un div donde almacena los datos dados
let tarjetaGraficaAMD = document.createElement("div");
tarjetaGraficaAMD.innerHTML = `
    <h3>Marca: ${grafica.marca}</h3>
    <h3>Modelo: ${grafica.modelo}</h3>
    <h3>anio: ${grafica.anioDeSalida}</h3>
    <h3>Memoria Vram: ${grafica.cantidadDeMemoria}</h3>
    <h3>RGB: ${grafica.rgb}</h3>` // anade elementos al div
document.body.appendChild(tarjetaGraficaAMD) // muestra en pantalla