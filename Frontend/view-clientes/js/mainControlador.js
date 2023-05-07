console.log(localStorage);
let companies = {}
let company = {}
let carrito = {}
let datosP = {}

const obtenerCompanies = () => {
    fetch('http://localhost:3003/companies', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(res => {
        companies = res.result; 
        console.log(res);
        renderizarCompanies();
    });
} 
obtenerCompanies();


const renderizarCompanies = () => {
    companies.forEach(company => {
        document.getElementById('zonaDeRenderEmpresas').innerHTML += 
        `
        <div class="centrarCard card" >
            <img class="card-img-top img-logo" src="${company.logo}" alt="">
            <div class="card-img-overlay">
                <h5 class="card-title">${company.nombreEmpresa}</h5>
                <p class="card-text">${company.descripcion}</p>
            </div>
            <button onclick="verItems('${company._id}')" class="botonVer">Ver más</button>
        </div>
        `;

    });
}



function verItems(_id) {
    document.getElementById("botonesCategorias").classList.add("ocultar")
    document.getElementById("contenedor-items").classList.add("mostrar")
    document.getElementById("contenedor-items").classList.remove("ocultar")
    document.getElementById("carrito").classList.add("ocultar")
    document.getElementById("carrito").classList.remove("mostrar")
    document.getElementById("perfil").classList.remove("mostrar")
    document.getElementById("perfil").classList.add("ocultar")

    fetch('http://localhost:3003/company/'+_id, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(res => {
        company = res; 
        console.log(company);
        renderizarProductos();
    });
}

const renderizarProductos = () => {
    console.log(company.productos);
    company.productos.forEach((producto, i) => {
        document.getElementById('zonaDeRenderProductos').innerHTML +=
        `
        <div class="centrarCard card" >
            <img class="card-img-top img-logo" src="${producto.imagen}" alt="Card image cap">
            <div class="card-img-overlay">
              <h5 class="card-title">${producto.nombreProducto}</h5>
              <p class="card-text">Precio: ${producto.precio} Lps.</p>
            </div>
            <button onclick="agregarACarrito(${i})" class="botonVer">Pedir</button>
        </div>
        `
    });
}
    
const agregarACarrito = (index) => {
    document.getElementById('zonaDeRenderCarrito').innerHTML += 
    `
    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${company.productos[index].nombreProducto}</h5>
            <small>pendiente</small>
        </div>
        <p class="mb-1">pendiente</p>
        <small>${company.nombreEmpresa}</small>
    </a>
    `
    document.getElementById('zonaNotifi').innerHTML +=
        `
        <div class="alert success">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            Orden agregada
        </div>
        `
}

const renderizarPerfil = () => {

    fetch('http://localhost:3003/user/'+localStorage.id, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(res => {
        datosP = res; 
        console.log(res);
    });

    document.getElementById('perfil').innerHTML =
    `
    <div class="portadaPerfil">
        <img class="imgPerfil" src="img/Logo-Hermes.png" alt="">
        <label class=""></label>
        </div>
        <div class="datosPerfil">
        <div class="itemDatosPerfil">${datosP.nombre}</div>
        <div class="itemDatosPerfil">${datosP.numero}</div>
        <div class="itemDatosPerfil">${datosP.correo}</div>
        <div class="itemDatosPerfil">${datosP.id}</div>
        <div class="itemDatosPerfil">
            <button type="button" class="btn btn-secondary">
            Actualizar info
            </button>
        </div>
        <div class="itemDatosPerfil">
            <button type="button" class="btn btn-danger">
            Cerrar sesion
            </button>
        </div>
    </div>
    `
}
renderizarPerfil()

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