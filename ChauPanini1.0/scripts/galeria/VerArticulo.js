import urlJson from "../global/urls.js"
import { calculaCuotas, DibujaCarrito, formaPagos } from "./GalCarrito.js"
import { datoPorID } from "./GalDatos.js"
import { escucharBotones } from "./GalTarjetas.js"


export const VerArticulo = (idFigu) =>{

    let {id, precio} = datoPorID(idFigu);
    document.querySelector("#main").innerHTML=''
    document.querySelector("#main").append(detalleArticulo(id))
    let pagos = document.querySelector('#infoPagos')
    if (typeof pagos != "undefined"){
        pagos.innerHTML = formaPagos(precio)
        document.querySelector('#cmbxCuotas').addEventListener('change', () => calculaCuotas(precio, event))
    }

    escucharBotones(document.querySelectorAll(".botonComprar"))
    DibujaCarrito();
}



const detalleArticulo = (idFigu) => {

    numeral.locale('es')

    let {id, nombre, pais, orden, grupo, confederacion, oferta, imagen, precio, existencia, coi} = datoPorID(idFigu);

    let verPais = arrayPaises.find((dato) => dato.pais == pais )

    let titulo1 = (orden == 0)? nombre + '  (' + coi + ')': nombre;
    let titulo2 = (orden == 0)? confederacion + '  -   Grupo ' + grupo : '(' + coi + ')' + ' ' + verPais.nombre;

    let lyOferta = (oferta == 1 && existencia > 0)? '<div class="TRJofertaG"><span>Oferta</span></div>':'';

    let botonComprar = (existencia > 0)
            ?'<div class="TRJbotonComprar"><button class="botonComprar" id=' + 'bot_' + id + '>Comprar</button></div>'
            :'<div class="TRJsinStock">Sin Stock</div>'

    let div = document.createElement("div");

    div.innerHTML = `
        <div class="VREcontenedor VREjustCont">
            <div class="VREinfoProd">
                <div class="VREnombreElem">
                    <span>${titulo1 + ' / ' + titulo2}<br></span>
                    <span>Disponibilidad en stock : ${existencia}</span>
                </div>
                <div class="VREimagenElem">
                    ${lyOferta}
                    <img class="VREImagen" src="${urlJson.IMAGENES + imagen}" alt="">
                </div>
            </div>
            <div class="VREinfoComer">
                <div class="VREtexto1">Precio On Line</div>
                <div class="VREtexto1 VREprecio">AR$ ${numeral(precio).format('0,0')}</div>
                <div id="infoPagos" class="VREpagos">
                </div>
                <div class="LSPbotonera">
                    ${botonComprar}
                </div>
            </div>
            <div class="LSPbotonera">
                <a href="#/"><button>Volver al Catálogo</button></a>
                <a href="#pedido"><button>Detalle de compra</button></a>
                <a href="#cancela"><button>Cancelar Compra</button></a>
            </div>
        </div>
    `
    return(div)
}


