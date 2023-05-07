const registrarUsuario = () => {
    var nombre = document.getElementById('nombreRegis').value;
    var numeroTel = document.getElementById('numeroRegis').value;
    var email = document.getElementById('emailRegis').value;
    var contrasena = document.getElementById('contrasenaRegis').value;
    let nuevoUsuario = {
        nombre,
        numeroTel,
        email,
        contrasena
    }
    console.log(nombre, numeroTel, email, contrasena,);

    fetch('http://localhost:3003/AddUser', {
        Method: 'POST',
        Headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        Body: JSON.stringify({
            title:name,
            body:nuevoUsuario,
        
          })
      }).then(function(response){ 
        return response.json()})
        .then(function(data)
        {console.log(data)  
      }).catch(error => console.error('Error:', error)); 
      ;

    //window.location.href = "mainCliente.html";

}