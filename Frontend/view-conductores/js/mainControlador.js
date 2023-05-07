console.log(localStorage);
var orders = {}

const obtenerOrders = () => {
    fetch('http://localhost:3003/orders', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(res => {
        orders = res.result; 
        console.log(res);
        renderizarPendientes();
    });
} 
obtenerOrders();
renderizarPendientes = () => {
    orders.forEach(order => {
        console.log(order);
        console.log(order.repartidor[0]);
        console.log(localStorage.id);
        if (!order.estado) {
            document.getElementById('zonaDeRenderPendientes').innerHTML +=
            `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-bold">Usuario: ${order.nombreU}</div>
                lugar: ${order.lugar}
                </div>
            </li>
            `
        } else if (order.repartidor[0] == localStorage.id){
            
            document.getElementById('zonaDeRenderActivas').innerHTML +=
            `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-bold">Usuario: ${order.nombreU}</div>
                lugar: ${order.lugar}
                </div>
            </li>
            `
        } else{
            document.getElementById('zonaDeRenderRealizadas').innerHTML +=
            `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-bold">Usuario: ${order.nombreU}</div>
                lugar: ${order.lugar}
                </div>
            </li>
            `
        }
    });
}