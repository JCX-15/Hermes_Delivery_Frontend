function verItems() {
    document.getElementById("botonesCategorias").classList.add("ocultar")
    document.getElementById("contenedor-items").classList.add("mostrar")
    document.getElementById("contenedor-items").classList.remove("ocultar")
    document.getElementById("carrito").classList.add("ocultar")
    document.getElementById("carrito").classList.remove("mostrar")
    document.getElementById("perfil").classList.remove("mostrar")
    document.getElementById("perfil").classList.add("ocultar")
}

function regresarCategorias() {
    document.getElementById("botonesCategorias").classList.remove("ocultar")
    document.getElementById("contenedor-items").classList.remove("mostrar")
    document.getElementById("contenedor-items").classList.add("ocultar")
    document.getElementById("botonesCategorias").classList.add("mostrar")
    document.getElementById("carrito").classList.remove("mostrarCarrito")
    document.getElementById("carrito").classList.add("ocultar")
    document.getElementById("perfil").classList.remove("mostrar")
    document.getElementById("perfil").classList.add("ocultar")
}

function verCarrito() {
    document.getElementById("botonesCategorias").classList.add("ocultar")
    document.getElementById("contenedor-items").classList.add("ocultar")
    document.getElementById("carrito").classList.remove("ocultar")
    document.getElementById("carrito").classList.add("mostrar")
    document.getElementById("perfil").classList.remove("mostrar")
    document.getElementById("perfil").classList.add("ocultar")
}

function verPerfil() {
    document.getElementById("botonesCategorias").classList.remove("mostrar")
    document.getElementById("contenedor-items").classList.remove("mostrar")
    document.getElementById("carrito").classList.remove("mostrarCarrito")
    document.getElementById("contenedor-items").classList.add("ocultar")
    document.getElementById("botonesCategorias").classList.add("ocultar")
    document.getElementById("carrito").classList.add("ocultar")
    document.getElementById("perfil").classList.add("mostrar")
    document.getElementById("perfil").classList.remove("ocultar")
}