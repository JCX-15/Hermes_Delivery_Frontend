
function verSolicitudes(){
    document.getElementById('principal-motoristas').style.display = 'none';
    document.getElementById('Solicitudes').style.display = 'block';
}

function EditarMotoristas() {
    document.getElementById('principal-motoristas').style.display = 'none';
    document.getElementById('Solicitudes').style.display = 'none';
    document.getElementById('EditarMotoristas').style.display = 'block';
}

function mostrarMotoristasPrincipal(){
    document.getElementById('principal-motoristas').style.display = 'block';
    document.getElementById('Solicitudes').style.display = 'none';
    document.getElementById('EditarMotoristas').style.display = 'none';
}

function mostrarPaginaPrincipal(){
    window.location.href = "../html/webAdministrativa.html"
}