let solicitudes=[];
function verSolicitudes(){
    document.getElementById('principal-motoristas').style.display = 'none';
    document.getElementById('Solicitudes').style.display = 'block';
    document.getElementById('tablitadsoli').innerHTML= `    
    <tr style="background-color:#00234a; font-size: 2.2rem; color: white;">
        <th>Indice</th>
        <th>Nombre</th>
        <th>DNI</th>
        <th>Placa</th>
        <th>Info</th>
        <th>Accion</th>
    </tr>`;
    
    fetch(`http://localhost:3003/drivereqs`,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME Type
        }
    })
    .then((respuesta) => respuesta.json())
    .then((fesr) => {
        console.log(fesr);
		solicitudes=fesr;
        let cont=0;
		solicitudes.forEach(tripi => {
            cont++;
			document.getElementById('tablitadsoli').innerHTML+=`
            <tr style="font-size: 1.7rem;">
                <td>${cont}</td>
                <td>${tripi.Nombre}</td>
                <td>${tripi.DNI}</td>
                <td>${tripi.Placa}</td>
                <td><i class="fa-sharp fa-solid fa-circle-info" onclick="showmoreInfo(${cont})"></i></td>
                <td>
                    <i class="fa-solid fa-check-to-slot" onclick="aceptarSolicitud(${cont})"></i>
                    <i class="fa-solid fa-trash" onclick="denegarSolicitud(${cont})"></i>
                </td>
            </tr>`;
		});
    });
}

function EditarMotoristas() {
    document.getElementById('principal-motoristas').style.display = 'none';
    document.getElementById('Solicitudes').style.display = 'none';
    document.getElementById('EditarMotoristas').style.display = 'block';
    editarDrivers();
}

function mostrarMotoristasPrincipal(){
    document.getElementById('principal-motoristas').style.display = 'block';
    document.getElementById('Solicitudes').style.display = 'none';
    document.getElementById('EditarMotoristas').style.display = 'none';
    Trabajadores();
}
let actuales=[]
const Trabajadores= ()=>{
    fetch(`http://localhost:3003/drivers`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME Type
        }
    })
    .then((respuesta) => respuesta.json())
    .then((res) => {
        console.log(res);
		actuales=res;
        document.getElementById('motoristasContenedor').innerHTML='';
		actuales.forEach(melo => {
			document.getElementById('motoristasContenedor').innerHTML+=`
            <div class="contenedor-motorista">
                <p class="fuente-motoristas">${melo.nombre}</p>
            </div>`;
		});
    }); 
}
Trabajadores();

function editarDrivers(){
    document.getElementById('EditarMotoristas').innerHTML=`
    <section>
        <center >
            <table id="tabladeditar" border= "5" cellpadding = "25" cellspacing = "10">
                <tr style="background-color:#00234a; font-size: 2.2rem; color: white;">
                    <th>Indice</th>
                    <th>Nombre</th>
                    <th>Placa</th>
                    <th>Borrar</th>
                </tr>
            </table>
        </center>
    </section>`;
    let t=1;
    actuales.forEach(mulo=>{
        document.getElementById('tabladeditar').innerHTML+=`
        <tr style="font-size: 1.8rem;">
        <td>${t}</td>
        <td>${mulo.nombre}</td>
        <td>${mulo.correo}</td>
        <td>
            <i class="fa-solid fa-trash" onclick="eliminar(${t})"></i>
        </td>
        </tr>`;
        t++;
    });
}

function mostrarPaginaPrincipal(){
    window.location.href = "../html/webAdministrativa.html"
}

function denegarSolicitud(x){
    console.log(actuales[x-1]._id)
    fetch(`http://localhost:3003/drivereqs/${actuales[x-1]._id}`, {
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

function eliminar(x){
    console.log(actuales[x-1]._id)
    fetch(`http://localhost:3003/drivers/${actuales[x-1]._id}`, {
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

function aceptarSolicitud(y){
    console.log(solicitudes[y-1]._id);
    let entrante = solicitudes[y-1]._id;
    fetch(`http://localhost:3003/drivers/${entrante.Nombre}/${entrante.email}/${entrante.contraseña}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json", //MIME Type
        }
    })
    .then((respuesta) => respuesta.json())
    .then((res) => {
        console.log(res);
    });
    fetch(`http://localhost:3003/drivereqs/${solicitudes[y-1]._id}`, {
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