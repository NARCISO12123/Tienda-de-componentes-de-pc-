const menu = document.querySelector("#menu")
const enlaces = document.querySelector("#nav-links")

menu.addEventListener('click', () => {
    enlaces.classList.toggle('show')
})