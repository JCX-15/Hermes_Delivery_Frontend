localStorage.clear()
let users = {}

const obtenerUsers = () => {
    fetch('http://localhost:3003/users', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(res => {
        users = res.result; 
        console.log(res);
    });
} 
obtenerUsers();

const iniciarSesion = () => {
    console.log("----------------------------------------------------");
    var correo = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].correo);
        if (users[i].correo == correo) {
            console.log("usuario encontrado");
            if (users[i].contraseña == password) {
                console.log("contrasenia coincide");
                localStorage.setItem("id", users[i]._id);
                localStorage.setItem("usuario", users[i].correo);
                localStorage.setItem("nombre", users[i].nombre)
                console.log(localStorage);
                window.location.href = "mainCliente.html";
            }else{
                console.log("contrasenia no coincide");
                break
            }
        }else{
            console.log("usuario no encontrado");
        }
    }
    console.log("---------------------------------------------------");
}