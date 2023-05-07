
function mostrarPaginaPrincipal(){
    window.location.href = "../html/webAdministrativa.html"
}
var orden=[]
const ordenes=()=>{
    document.getElementById('ordenesDisponibles').innerHTML='';
    fetch('http://localhost:3003/orders', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME Type
        }
    })
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
        console.log(respuesta);
        orden=respuesta;
        let conti=0;
        orden.forEach(mari=>{
            conti++;
            document.getElementById('ordenesDisponibles').innerHTML+=`
            <div class="contenedor-motorista" onclick="modalOrden(${conti-1})">
                <p class="fuente-motoristas"> Orden #${mari.Norden}</p>
            </div>`;
        })
    }); 
}
ordenes();

function modalOrden(indice){
    var ordenSelec
    let x = orden[indice]._id
    fetch('http://localhost:3003/orders/'+x, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME Type
        }
    })
    .then((respuesta) => respuesta.json())
    .then((respu) => {
        console.log(respu);
        ordenSelec=respu;
        document.getElementById('principal-Ordenes').innerHTML+=`
        <div class="modal fade" id="modal-playlists" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Descripcion de Orden</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <div class="row">Nombre Usuario: ${ordenSelec.nombreU}</div>
                    <div class="row">Telefono:       ${ordenSelec.contacto}</div>
                    <div class="row">Metodo de Pago: ${ordenSelec.mPago}</div>
                    <div class="row">Lugar de Entrega:${ordenSelec.entrega}</div>
                    <div class="row">Detalles:        ${ordenSelec.Pedido[0].nombreEmpresa}</div>
                    <div class="row">                 ${ordenSelec.Pedido[0].nombreProducto}</div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-outline-success" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-outline-success">Guardar en playlist</button>
                </div>
            </div>
            </div>
        </div>`;

        document.getElementById('modal-playlists').modal();
        
    }); 
}