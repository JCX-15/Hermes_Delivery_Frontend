
function mostrarEditarPrincipal(){
    document.getElementById('editarPrincipal').style.display = 'block';
    document.getElementById('editarEmpresa').style.display = 'none';
}

function mostrarPaginaPrincipal(){
    window.location.href = '../html/administrarEmpresa.html'
}
let empres=[]
function editarEmpresa(){
    document.getElementById('editarPrincipal').innerHTML=`
    <table id="tabladeditarEmp" border= "5" cellpadding = "25" cellspacing = "10" style="margin-left: 18px;">
        <tr style="background-color:#99e22a; font-size: 2.2rem; color: black;">
            <th>Nombre</th>
            <th>Logo</th>
            <th>Descripcion</th>
            <th>Acciones</th>
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
        empres=res;
        let t=1;
        empres.forEach(freed=>{
            console.log(freed)
            document.getElementById('tabladeditarEmp').innerHTML+=`
                <tr style="font-size: 1.8rem;">
                <td>${freed.nombreEmpresa}</td>
                <td><img src="/${freed.logo}" alt="" style="height: 80px"></td>
                <td>${freed.descripcion}</td>
                <td>
                    <i class="fa-solid fa-pen-to-square" onclick="editar(${t})"></i>
                    <i class="fa-solid fa-trash" onclick="eliminar(${t-1})"></i>
                </td>
                </tr>`;
                t++;
        });
    }); 
    
}
editarEmpresa();

function eliminar(y){
    let w = empres[y]
    fetch(`http://localhost:3003/companies/${w._id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json", //MIME Type
        }
    })
    .then((respuesta) => respuesta.json())
    .then((res) => {
        console.log(res);
    });
}
function editar(x){
    let w = empres[x-1];
    document.getElementById('editarPrincipal').style.display = 'none';
    document.getElementById('editarEmpresa').style.display = 'block';
    document.getElementById('nombreEmpresa').setAttribute("value", w.nombreEmpresa);
    document.getElementById('descripcion').setAttribute("value", w.descripcion);
    document.getElementById('imagenEmp').setAttribute("value", w.logo);
    document.getElementById('imagenEmp2').setAttribute("value", w.banner);
}