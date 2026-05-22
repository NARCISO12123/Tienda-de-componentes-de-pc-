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
graficaAMD.info();
console.log(" ")

grafica.info();
console.log(" ")
