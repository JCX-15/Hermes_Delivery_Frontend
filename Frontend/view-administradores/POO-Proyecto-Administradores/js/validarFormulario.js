let user = []
function envioTemporal(){
	//window.location.href="html/webAdministrativa.html";
	
}

function validarLog(){
	nombre = document.getElementById('usuario').value;
	pass = document.getElementById('contraseña').value;
	fetch(`http://localhost:3003/admins`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME Type
        }
    })
    .then((respuesta) => respuesta.json())
    .then((respuestaUsa) => {
        console.log(respuestaUsa);
		user=Object.entries(respuestaUsa);
		user.forEach(melo => {
			melo.forEach(ich=>{
				if(ich.nombre == nombre && ich.contraseña == pass){
					window.location.href="html/webAdministrativa.html";
				}
			})
		});
    }); 
}