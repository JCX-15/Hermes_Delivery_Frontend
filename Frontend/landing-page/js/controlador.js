var contenido = section;

function generarCodigo(){

    contenido.forEach( cont => {
        console.log("fondo"+cont.id)
        document.getElementById('content-main').innerHTML +=
        `
            <div class="infoContent fondo${cont.id}">
            <img class="imagenCont" src="${cont.imagen}" alt="">
            <h1 class="title">${cont.titulo}</h1>
            <p class="text">${cont.parrafo}</p>
            </div>        
        `
    })
};

generarCodigo();

/* <div id="contenido-${cont.id}"> 
        <div class="infoContent fondo1">
        <img class="imagenCont" src="${cont.imagen}" alt="">
        <h1 class="title">${cont.titulo}</h1>
        <p class="text">${cont.parrafo}</p>
        </div>        
    </div>
 */

