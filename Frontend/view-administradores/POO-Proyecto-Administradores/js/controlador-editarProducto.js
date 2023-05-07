
function mostrarEditarPrincipal(){
    document.getElementById('editarEmpresa').style.display = 'none'
    document.getElementById('editarPrincipal').style.display = 'block'

}

function mostrarPaginaPrincipal(){
    window.location.href = '../html/administrarEmpresa.html'
}

let produs=[]
function editarProductos(){
    document.getElementById('editarPrincipal').innerHTML=`
    <nav id="navBar" class="flexNav">
        <div class="textoCentrar">
            <i class="fa-solid fa-arrow-left" style="font-size:35px; color: grey; " onclick="mostrarPaginaPrincipal()" ></i> 
            <p style="margin-left: 50px; font-size: 30px; color: #8FDC56;">Administrar Contenido /Editar Producto</p>
        </div>
        <p class="TituloNav">Hermes</p>
        <i class="fa-solid fa-user-secret" style="color: #8FDC56; font-size: 40PX;"></i>
    </nav>
    
    <table id="tabladeditarPro" border= "5" cellpadding = "25" cellspacing = "10" style="margin-left: 18px;">
        <tr style="background-color:#00234a; font-size: 2.2rem; color: white;">
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th>Borrar</th>
            </tr>
    </table>`;
    fetch(`http://localhost:3003/companies`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME Type
        }
    })
    .then((respuesta) => respuesta.json())
    .then((res) => {
        console.log(res);
        produs=res;
        let t=1;
        produs.forEach(freed=>{
            console.log(freed)
            freed.productos.forEach(mulo=>{
                console.log(freed)
                document.getElementById('tabladeditarPro').innerHTML+=`
                <tr style="font-size: 1.8rem;">
                <td>${mulo.nombreProducto}</td>
                <td><img src="/${mulo.imagen}" alt="" style="height: 80px"></td>
                <td>$ ${mulo.precio}</td>
                <td>
                    <i class="fa-solid fa-trash" onclick="eliminar(${t})"></i>
                </td>
                </tr>`;
                t++;
            });
        });
    }); 
    
}
editarProductos();