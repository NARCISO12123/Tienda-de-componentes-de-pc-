const menu = document.querySelector("#menu")
const enlaces = document.querySelector("#nav-links")

menu.addEventListener('click', () => {
    enlaces.classList.toggle('show')
})

// funcion para cambiar de color los botones.

function CambiarColor(botonCompra, botonCarrito){

 
    botonCompra.classList.add("botonCompra")
    botonCarrito.classList.add("botonCompra")
  
    // cuando pases por el boton cambia de color
    botonCompra.addEventListener("mouseenter", () => {
    botonCompra.style.backgroundColor= 'green'
   })

    botonCarrito.addEventListener('mouseenter', () => {
    botonCarrito.style.backgroundColor = 'red'
   })

   // caundo quitas el mause se quita el color
    botonCompra.addEventListener('mouseleave', () => {
    botonCompra.style.backgroundColor = 'gray'
   })

    botonCarrito.addEventListener('mouseleave', () => {
    botonCarrito.style.backgroundColor = 'gray'
   })
}
