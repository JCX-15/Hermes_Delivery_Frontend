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
    
}

function volverEmpresas(){
    document.getElementById('productos').style.display = "none";
    document.getElementById('Empresa').style.display = "block";
    document.getElementById('categorias').style.display = "none";
    document.getElementById('EmpresasWin').classList.add("switcher");
    document.getElementById('CategoriasWin').classList.remove("switcher");
    document.getElementById('ProductWin').classList.remove("switcher");
}

function volverProductos(){
    document.getElementById('productos').style.display = "block";
    document.getElementById('Empresa').style.display = "none";
    document.getElementById('categorias').style.display = "none";
    document.getElementById('EmpresasWin').classList.remove("switcher");
    document.getElementById('ProductWin').classList.add("switcher");
    document.getElementById('CategoriasWin').classList.remove("switcher");
}

