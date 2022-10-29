import { finalizaCompra, contenidoCarrito, carritoVacio, formaPagos, calculaCuotas } from "./GalCarrito.js"
import { actualizaStock } from "./GalDatos.js"


// paramFiltros -> variable global

export const VerPedido = () =>{
    let cantItems = carrito.getItemsChanguito()
    document.querySelector("#main").innerHTML=''

    if (cantItems > 0){
        document.querySelector("#main").append(contenidoCarrito())
        escuchaBotCantidad(document.querySelectorAll( 'button[id^="botR"],button[id^="botS"]' )) // agrego escuchador de click a cada boton de sumar / restar
        escuchaBotBorrar(document.querySelectorAll( 'button[id^="botBorra_"]' )) // agrego escuchador de click a cada boton de borrar
    } else {
        document.querySelector("#main").append(carritoVacio())
    }
}


export const VerPedidoFin = () =>{
    let cantItems = carrito.getItemsChanguito()
    let total = carrito.getTotalChanguito()

    document.querySelector("#main").innerHTML=''
    let leyError = ''

    if (cantItems > 0){
        document.querySelector("#main").append(finalizaCompra(cantItems))
        let pagos = document.querySelector('#infoPagos')
        if (typeof pagos != "undefined"){
            pagos.innerHTML = formaPagos(total)
            document.querySelector('#cmbxCuotas').addEventListener('change', () => calculaCuotas(total, event))
        }
    } else {
        document.querySelector("#main").append(carritoVacio())
    }
}


export const cierraPedido = () => {
    let arrayCarrito = carrito.getChanguito()
    arrayCarrito.forEach(item =>{
        actualizaStock(item.id, item.cantidad, 'S')
    })
    carrito.vaciaChanguito()
    swal({
        text: 'Gracias por su compra!!',
        title: "Transacción exitosa",
        button : {
            text: "Continaar",
            value: true,
            visible: true,
            className: "",
            closeModal: true,
        }
    }).then(() => {location.hash = '#/'}) // vuelve al catalogo
}

export const cancelaPedido = () => {
    swal({
        title: "Estas seguro?",
        text: "El carrito será vaciado y ya no vas a tener figuritas elejidas",
        buttons: {
            cancel: {
                text: "No",
                value: false,
                visible: true,
                className: "",
                closeModal: true,
            },
            confirm: {
                text: "Si",
                value: true,
                visible: true,
                className: "",
                closeModal: true
            }
        },
    })
    .then((respuesta) => {
        if (respuesta) {
            carrito.vaciaChanguito()
            location.hash = '#/'
        } else {
            location.hash = '#pedido'
        }
    });
/*
    if (confirm('Estas seguro. El carrito será vaciado y ya no vas a tener figuritas elejidas')){
        carrito.vaciaChanguito()
        location.hash = '#/'
    } else {
        location.hash = '#pedido'
    }
*/


}



const escuchaBotBorrar = (arrayBotones) => { // agrego un evento a cada boton de borrar
    arrayBotones.forEach(bot => {
        let arrayTmp = bot.id.split('_') // viene, x ej, bot_12. arrayTmp[0] = 'bot', arrayTmp[1]=12
        document.querySelector('#'+bot.id).addEventListener("click", () => elimina(arrayTmp[1])
        )
    })
}

const escuchaBotCantidad = (arrayBotones) => { // agrego un evento a cada boton de sumar/restar
    arrayBotones.forEach(bot => {
        let arrayTmp = bot.id.split('_') // viene, x ej, bot_12. arrayTmp[0] = 'bot', arrayTmp[1]=12
        document.querySelector('#'+bot.id).addEventListener("click", () => {
            (arrayTmp[0] == 'botR')? sumaResta(arrayTmp[1], -1): sumaResta(arrayTmp[1], 1)
        })
    })
}

const sumaResta = (id, valor) => {
    let newValores;
    let id0 = ('0000' + id).substring(('0000' + id).length - 4)
    if (valor < 0){
        newValores = carrito.restaCant(id, valor * -1)
    } else {
        newValores = carrito.sumaCant(id, valor)
    }
    document.querySelector('#cant_' + id0).innerHTML = newValores.cantidad
    document.querySelector('#totItem_' + id0).innerHTML = numeral(newValores.totItem).format('0,0')
    document.querySelector('#totCompra').innerHTML = numeral(newValores.totCompra).format('0,0')
}


const elimina = (id) => {
    let item = carrito.getItemForID(id)
    if (confirm('Confirma eliminar ' + item.nombre + ' de la lista?')){
        carrito.borraItem(id)
        VerPedido()
    }
}