function cambiarFormulario() {
    console.log("Se llamo a cambiarFormulario")
    document.getElementById(formulario1.style = 'display: none ')
    document.getElementById(formulario2.style = 'display: block !important')
    document.getElementById(esconderBoton.style = 'display: none')

    document.getElementById('numeritos').innerHTML = 
    `
        <button disabled class="imgProgreso1 linea">1</button>
        <strong class="txtDeCajas">----</strong>
        <button disabled class="imgProgreso1 linea">2</button>
    `
    console.log("Se termino la función cambiarFormulario");

}

function registrarUsuario() {
    var nombre = document.getElementById('nombreRegis').value;
    var apellido = document.getElementById('apellidoRegis').value;
    var id = document.getElementById('idRegis').value;
    var numeroTel = document.getElementById('numeroTelRegis').value;
    var email = document.getElementById('emailRegis').value;
    var contrasena = document.getElementById('contrasenaRegis').value;
    var vehiculo= document.getElementById('vehiculoRegis').value;
    var ciudad = document.getElementById('ciudadRegis').value;

    console.log(nombre, apellido, id, numeroTel, email, contrasena, vehiculo, ciudad);
}
