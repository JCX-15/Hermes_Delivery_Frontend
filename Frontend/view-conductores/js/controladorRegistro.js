let nuevoUsuario = {}

const registrarUsuario = () => {
    nombre = document.getElementById('nombreRegis').value
    apellido = document.getElementById('apellidoRegis').value
    idRegis = document.getElementById('idRegis').value
    numeroTelRegis = document.getElementById('numeroTelRegis').value
    contrasenaRegis = document.getElementById('contrasenaRegis').value
    nuevoUsuario = {
        nombre,
        apellido,
        idRegis,
        numeroTelRegis,
        contrasenaRegis
    }
    localStorage.setItem("id", users[i]._id);
    localStorage.setItem("usuario", users[i].correo);
    localStorage.setItem("nombre", users[i].nombre)
    console.log(nuevoUsuario);
    console.log(localStorage);
}