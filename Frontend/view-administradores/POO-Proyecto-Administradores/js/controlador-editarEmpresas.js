
function mostrarEditarPrincipal(){
    document.getElementById('editarPrincipal').style.display = 'block';
    document.getElementById('editarEmpresa').style.display = 'none';
    llenarTabla()
}

function mostrarPaginaPrincipal(){
    window.location.href = '../html/administrarEmpresa.html'
}