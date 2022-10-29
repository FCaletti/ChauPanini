import urlImg from '../global/urls.js'


export const DibujaCarrito = () =>{
    let cantItems = carrito.getItemsChanguito()
    let clase = (cantItems == 0)? 'PGJcarrito PGJvacio' : 'PGJcarrito PGJlleno'
    let verNumero = (cantItems == 0)? '' : '<div class="PGJnumero">' + cantItems + '</div>'
    document.querySelector("#pegajoso").innerHTML=`
        <div class="${clase}">
            <a href="#pedido"><i class="ic-carrito"></i></a>
            ${verNumero}
        </div>
`
}

export const contenidoCarrito = () =>{
    numeral.locale('es')
    let listaCarrito = carrito.getChanguito()
    let total = 0;
    let div = document.createElement("div");
    let listado = `
        <div class="LSPtitulo">Resumen del pedido</div>
        <div class="LSPcontenedor LSPjustCont">
            <div class="LSPtituloLis">Figu</div>
            <div class="LSPtituloLis LSPizq">Detalle</div>
            <div class="LSPtituloLis">Cantidad</div>
            <div class="LSPtituloLis LSPder">Pr Unitario</div>
            <div class="LSPtituloLis LSPder">Total</div>
            <div></div>
    `
    listaCarrito.forEach(item => {
        let id0 = ('0000' + item.id).substring(('0000' + item.id).length - 4)
        listado += `
            <div class="LSPimagenElem">
                <img class="LSPImagen" src="${urlImg.IMAGENES + item.imagen}" alt="${item.nombre}">
            </div>
            <div class="LSPnombreElem">
                <span>${item.nombre}<br></span>
                <span>${item.nombre2}</span>
            </div>
            <div class="LSPcantElem">
                <button class="LSPbotMenos" id="botR_${id0}">-</button>
                <div id="cant_${id0}">${item.cantidad}</div>
                <button class="LSPbotMas" id="botS_${id0}">+</button>
            </div>
            <div class="LSPprecioElem" id="precio_${id0}">${numeral(item.precio).format('0,0')}</div>
            <div class="LSPprecioElem" id="totItem_${id0}">${numeral(item.precio * item.cantidad).format('0,0')}</div>
            <div><button class="LSPbotElem" name="BorraItem" id="botBorra_${id0}"><i class="ic-basura"></i></button></div>
        `
        total += item.precio * item.cantidad

    });

    listado +=`
        <div class="LSPnombreElem LSPespacio">Total a abonar</div>
        <div class="LSPprecioElem">&nbsp;</div>
        <div class="LSPprecioElem LSPtotal" id="totCompra">${numeral(total).format('0,0')}</div>
        <div>&nbsp</div>
    `

    //    Intl.NumberFormat('es-ES', format())

    listado += `
        </div>
        <div>
            <div class="LSPbotonera">
                <a href="#/"><button>Volver al Catálogo</button></a>
                <a href="#finaliza"><button>Finalizar Compra</button></a>
                <a href="#cancela"><button>Cancelar Compra</button></a>
            </div>
        </div>
    `
    div.innerHTML += listado

    return(div)
}

export const carritoVacio = () =>{
    let div = document.createElement("div");
    div.innerHTML = `
        <div class="LSPcontenedorTexto">
            <div class="LSPtituloLis">&nbsp</div>
            <div class="LSPtituloLis">UPS! Aun no has elejido figus para comprar.</div>
            <div class="LSPtituloLis">&nbsp</div>
            <div class="LSPtituloLis">&nbsp</div>
        </div>
        <div>
            <div class="LSPbotonera">
            <a href="#/"><button>Volver al Catálogo</button></a>
        </div>
    `
    return(div)
}


export const finalizaCompra = (cont) =>{
    numeral.locale('es')
    let total = carrito.getTotalChanguito()
    let div = document.createElement("div");
    div.innerHTML = `
        <div class="LSPtitulo">Finalizacion de la compra</div>
        <div class="VREcontenedor VREjustCont">
            <div class="LSPcontenedorTexto">
                <div class="LSPtituloLis">&nbsp</div>
                <div class="LSPtituloLis LSPizq">Estas a punto de confirmar la compra de ${cont} figuritas.</div>
                <div class="LSPtituloLis">&nbsp</div>
                <div class="LSPtituloLis LSPizq">Total a pagar : ${numeral(total).format('0,0')}.</div>
                <div class="LSPtituloLis">&nbsp</div>
                <div class="LSPtituloLis">&nbsp</div>
                <div class="LSPbotonera">
                    <a href="#cierra"><button>Finalizar compra</button></a>
                </div>
                <div class="LSPtituloLis">&nbsp</div>
            </div>
            <div class="VREinfoComer">
                <div class="VREtexto1">Total a abonar</div>
                <div class="VREtexto1 VREprecio">AR$ ${numeral(total).format('0,0')}</div>
                <div id="infoPagos" class="VREpagos">
                </div>
                <div class="LSPtituloLis">&nbsp</div>
            </div>
            <div class="LSPbotonera">
                <a href="#pedido"><button>Volver al resumen</button></a>
                <a href="#/"><button>Volver al Catálogo</button></a>
                <a href="#cancela"><button>Cancelar Compra</button></a>
            </div>
        </div>
    `
    return(div)

/*
        <div class="LSPcontenedorTexto">
            <div class="LSPtituloLis">&nbsp</div>
            <div class="LSPtituloLis LSPizq">Estas a punto de confirmar la compra de ${cont} figuritas.</div>
            <div class="LSPtituloLis">&nbsp</div>
            <div class="LSPtituloLis LSPizq">Total a pagar : ${numeral(total).format('0,0')}.</div>
            <div class="LSPtituloLis">&nbsp</div>
            <div class="LSPtituloLis">&nbsp</div>
            <div class="LSPbotonera">
                <a href="#cierra"><button>Finalizar compra</button></a>
            </div>
            <div class="LSPtituloLis">&nbsp</div>
        </div>
        <div>
            <div class="LSPbotonera">
            <a href="#pedido"><button>Volver al resumen</button></a>
            <a href="#/"><button>Volver al Catálogo</button></a>
            <a href="#cancela"><button>Cancelar Compra</button></a>
        </div>
*/
}


export const formaPagos = (precio) =>{

    numeral.locale('es')
    return (`
        <div class="VREtexto2">Formas de Pago</div>
        <div class="VREpagoTarjeta">
            <div class="VREtexto3">Pagos con Tarjetas</div>
            <select name="select1" class="VREselect">
                <option value="01">Cabal</option>
                <option value="02" selected>Visa</option>
                <option value="04">Mastercard</option>
            </select>
            <select name="select2" class="VREselect">
                <option value="01">Banco Provincia</option>
                <option value="02" selected>Banco Nacion</option>
                <option value="04">Banco Frances</option>
            </select>
            <select name="select3" class="VREselect" id="cmbxCuotas">
                <option value=0 selected>Contado 1 pago</option>
                <option value=1>3 cuotas</option>
                <option value=2>6 cuotas</option>
                <option value=3>12 cuotas</option>
            </select>
            <div id="txtCuota" class="VREtexto3">Un pago AR$ ${numeral(precio).format('0,0.00')}</div>
            <div id="totCuotas" class="VREtexto2 VREtarjetasTotal">Total : AR$ ${numeral(precio).format('0,0')}</div>
        </div>
        <div class="VREenvios">
            <div class="VREenviosIcon"><i class="ic-camion"></i></div>
            <div class="VREenviosTexto">Opciones de Envio</div>
        </div>
        `
    )
}

export const calculaCuotas = (precio, event) => {
    numeral.locale('es')

    let opcion = event.target.value

    let cantCuotas = interes[opcion].cuotas
    let valorTotal = precio * (1 + (interes[opcion].interes/100))
    let valorCuota = valorTotal / cantCuotas

    document.querySelector('#txtCuota').innerHTML = 
        (cantCuotas == 1)
            ? 'Un pago AR$ ' + numeral(valorCuota).format('0,0')
            :  cantCuotas + ' cuotas de Ar$ ' + numeral(valorCuota).format('0,0.00')

    document.querySelector('#totCuotas').innerHTML = 'Total : AR$ ' + numeral(valorTotal).format('0,0')

}

