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
    
    constructor(marca, anioDeSalida, modelo, cantidadDeMemoria, rgb, imagen){
        
        // heredad atributos
        super(marca, anioDeSalida, modelo, cantidadDeMemoria);
        
        // crear nuevo atributo
        this.rgb = rgb;
        this.imagen = imagen;

        // modificar atributos heredados
        this.marca = marca.toUpperCase()
        this.modelo = modelo.toUpperCase();
        this.cantidadDeMemoria = cantidadDeMemoria + " GB"
        this.imagen = "Anadir Url img";
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
let grafica = new NuevaGrafica("nvidia", 2025, "rtx 5080", 16, true)
let graficaAMD = new NuevaGrafica("amd", 2025, "rx 7900 xt", 32, false)
let graficaIntel = new NuevaGrafica( "intel", 2024, "arc b580", 12, false)
let graficaNvidia2 = new NuevaGrafica("nvidia", 2024, "rtx 4070", 12, true);
let graficaAMD2 = new NuevaGrafica("amd", 2024, "rx 7800 xt", 16, false);


// funcion de flecha, recorre las instancias
// para luego mostrar sus datos.
let graficas = [grafica, graficaAMD, graficaIntel, graficaNvidia2, graficaAMD2];
graficas.forEach(g => {
    // crea un div para almacenar los datos
    let tarjeta = document.createElement("div")
    tarjeta.innerHTML = `
    <h3>Marca: ${g.marca}</h3>
    <h3>Modelo: ${g.modelo}</h3>
    <h3>anio: ${g.anioDeSalida}</h3>
    <h3>Memoria Vram: ${g.cantidadDeMemoria}</h3>
    <h3>RGB: ${g.rgb}</h3>` // anade elementos al div
    document.body.appendChild(tarjeta) // muestra en pantalla
    })