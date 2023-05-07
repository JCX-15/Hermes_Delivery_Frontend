localStorage.clear()

function registrarUsuario() {
    var nombre = document.getElementById('nombreRegis').value;
    var numeroTel = document.getElementById('numeroRegis').value;
    var email = document.getElementById('emailRegis').value;
    var contrasena = document.getElementById('contrasenaRegis').value;
   
    console.log(nombre, numeroTel, email, contrasena,);
}

let drivers = {}

const obtenerDrivers = () => {
    fetch('http://localhost:3003/drivers', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(res => {
        drivers = res.result; 
        console.log(res);
    });
} 
obtenerDrivers();

const iniciarSesion = () => {
    console.log("----------------------------------------------------");
    var correo = document.getElementById("correo").value;
    var password = document.getElementById("password").value;
    console.log(correo);
    console.log(password);
    for (let i = 0; i < drivers.length; i++) {
        console.log(drivers[i].correo);
        if (drivers[i].correo == correo) {
            console.log("usuario encontrado");
            if (drivers[i].contraseña == password) {
                console.log("contrasenia coincide");
                localStorage.setItem("id", drivers[i]._id);
                localStorage.setItem("usuario", drivers[i].correo);
                console.log(localStorage);
                window.location.href = "driverMain.html";
            }else{
                console.log("contrasenia no coincide");
                break
            }
        }else{
            console.log("usuario no encontrado");
        }
    }
    console.log("----------------------------------------------------");
}