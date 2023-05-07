function mostrarPaginaPrincipal(){
    window.location.href = "../html/webAdministrativa.html"
}

function mostrarCategorias(){
    document.getElementById('productos').style.display = "none";
    document.getElementById('Empresa').style.display = "none";
    document.getElementById('categorias').style.display = "block";
    document.getElementById('EmpresasWin').classList.remove("switcher");
    document.getElementById('CategoriasWin').classList.add("switcher");
    document.getElementById('ProductWin').classList.remove("switcher");
    cargarCategos();
}

function volverEmpresas(){
    document.getElementById('productos').style.display = "none";
    document.getElementById('Empresa').style.display = "block";
    document.getElementById('categorias').style.display = "none";
    document.getElementById('EmpresasWin').classList.add("switcher");
    document.getElementById('CategoriasWin').classList.remove("switcher");
    document.getElementById('ProductWin').classList.remove("switcher");
    cargarEmpresas();
}

function volverProductos(){
    document.getElementById('productos').style.display = "block";
    document.getElementById('Empresa').style.display = "none";
    document.getElementById('categorias').style.display = "none";
    document.getElementById('EmpresasWin').classList.remove("switcher");
    document.getElementById('ProductWin').classList.add("switcher");
    document.getElementById('CategoriasWin').classList.remove("switcher");
    cargarProductos();
}

let empresas=[]
let producto =[]
let categorias=[]

function cargarEmpresas() {
    fetch('http://localhost:3003/companies', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME Type
        }
    })
    .then((respuesta) => respuesta.json())
    .then((re) => {
        console.log(re);
        empresas = re;
        console.log(empresas);
        document.getElementById('containerEmpres').innerHTML='';
        empresas.forEach(apo=>{
            document.getElementById('containerEmpres').innerHTML+=`
            <div class="col-4">
                <div class="cardCategoria" style="margin-bottom: 30px;">
                    <img class="imgCategoria" src="../${apo.banner}" alt="">
                    <div style="display: flex; align-items: center;">
                        <img style="margin-left: 10px ;" class="logoredondo" src="../${apo.logo}" alt="">
                        <div>
                            <p class="textoCategoria segundo">${apo.nombreEmpresa}</p>
                            <p class="textoCategoriat">${apo.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        })
    }); 
}
cargarEmpresas();

function cargarCategos(){
    fetch('http://localhost:3003/categories', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME Type
        }
    })
    .then((respuesta) => respuesta.json())
    .then((reno) => {
        console.log(reno);
        categorias = reno;
        console.log(categorias);
        document.getElementById('containerCategorias').innerHTML='';
        categorias.forEach(apo=>{
            document.getElementById('containerCategorias').innerHTML+=`
            <div class="col-4">
                <div class="cardCategoria" style="margin-bottom: 30px;">
                    <img class="imgCategoria" src="../${apo.imagen}" alt="">
                    <p class="textoCategoria">${apo.nombreCategoria}</p>
                </div>
            </div>`;
        })
    }); 
}
function cargarProductos(){
    document.getElementById('container-produ').innerHTML='';
    empresas.forEach(avon=>{
        avon.productos.forEach(peer=>{
            document.getElementById('container-produ').innerHTML+=`
            <div class="col-4">
                <div class="cardCategoria" style="margin-bottom: 30px;">
                    <img class="imgCategoria" src="../${peer.imagen}" alt="">
                    <div style="display: flex; align-items: center;">
                        <div>
                            <p class="textoCategoria segundo">${peer.nombreProducto}</p>
                            <p class="textoCategoriat"> $ ${peer.precio}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        })
    })
}