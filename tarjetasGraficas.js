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
        this.imagen = imagen;
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
// idea conectar una base de datos de productos.
let grafica = new NuevaGrafica(
    "nvidia", 
    2025, 
    "rtx 5080", 
    16, 
    true,
   "https://www.wepc.com/wp-content/uploads/2025/01/RTX-5080-WePC-8-of-14-300x200.jpg"
)
let graficaAMD = new NuevaGrafica(
    "amd", 
    2025, 
    "rx 7900 xt", 
    32, 
    false,
    "https://cdn.mos.cms.futurecdn.net/XpB9PMsJPnDC8apR2B4mgR.jpg"
)
let graficaIntel = new NuevaGrafica(
    "intel", 
    2024, 
    "arc b580", 
    12, 
    false,
    "https://i.pcmag.com/imagery/reviews/04LEavYRycfy8230UD1jbYg-1.fit_lpad.size_238x139.v1733951141.jpg"
)
let graficaNvidia2 = new NuevaGrafica(
    "nvidia", 
    2024, 
    "rtx 4070", 
    12, 
    true,
    "https://cdn.mos.cms.futurecdn.net/W3BvPQi5gkHxPuF4bjsXDd.jpg"
);
let graficaAMD2 = new NuevaGrafica(
    "amd", 
    2024, 
    "rx 7800 xt", 
    16, 
    false,
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/08/25/RX-7700-XT.jpg?width=1200&quality=60&format=auto"
);


// funcion de flecha, recorre las instancias
// para luego mostrar sus datos.
let graficas = [grafica, graficaAMD, graficaIntel, graficaNvidia2, graficaAMD2];
graficas.forEach(g => {
    
    // crea un div para almacenar los datos
    let tarjeta = document.createElement("div")
     
    // anade elementos al div
    tarjeta.innerHTML = `
    <img src="${g.imagen}" width="200">
    <h3>Marca: ${g.marca}</h3>
    <h3>Modelo: ${g.modelo}</h3>
    <h3>anio: ${g.anioDeSalida}</h3>
    <h3>Memoria Vram: ${g.cantidadDeMemoria}</h3>
    <h3>RGB: ${g.rgb}</h3>
    ` 

    document.body.appendChild(tarjeta) // muestra en pantalla
    })