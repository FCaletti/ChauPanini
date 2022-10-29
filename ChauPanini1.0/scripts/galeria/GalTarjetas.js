// usuario -> variable global

import { DibujaCarrito } from "./GalCarrito.js";
import urlJson from "../global/urls.js"

export const contenedorFigus = (datos) => {
//    console.log(datos);    
    let div = document.createElement("div");
    div.className = "TRJcontenedor TRJjustCont"
    div.innerHTML = ''
    datos.map( figu => {
        div.innerHTML += VerFigu(figu)
    })
    return(div);
}

export const VerFigu = (datoTarj) => {
    let {id, nombre, pais, orden, grupo, asociacion, oferta, imagen, precio, existencia} = datoTarj;
    let pathImagen = urlJson.IMAGENES

    let lyOferta = (oferta == 1 && existencia > 0)? '<div class="TRJoferta"><span>Oferta</span></div>':'';
    let botonComprar = (existencia > 0)
            ?'<div class="TRJbotonComprar"><button class="botonComprar" id=' + 'bot_' + id + '>Comprar</button></div>'
            :'<div class="TRJsinStock">Sin Stock</div>'

    let tarjeta = `
        <div class="TRJcelda">
            ${lyOferta}
            <div>
                <a href="#articulo_${id}">
                    <img class="TRJImagen" src="${pathImagen + imagen}" alt="${nombre}" srcset="${pathImagen + imagen}, ${pathImagen + "00_00.jpg"}">
                </a>
            </div>
            <div class="TRJrenglon1">${nombre}</div>
            <div class="TRJrenglon2">
                <div class="TRJprecioElem">AR$ ${numeral(precio).format('0,0')}</div>
                ${botonComprar}
            </div>
            <div class="TRJconsumo">Stock : ${existencia}</div>
        </div>
    `
    return(tarjeta);
}


export const errorFigus = (txtError) => {
    let div = document.createElement("div");
    div.className = "TRJerror"
    div.innerText = txtError
    return(div)
}


export const escucharBotones = (arrayBotones) => { // agrego un evento a cada boton de comprar
    arrayBotones.forEach(bot => {
        let arrayTmp = bot.id.split('_') // viene, x ej, bot_12. arrayTmp[0] = 'bot', arrayTmp[1]=12
        document.querySelector('#'+bot.id).addEventListener("click", () => agregaAlCarrito(arrayTmp[1]))
    })
}


const agregaAlCarrito = (idFigu) => {
    let figurita = arrayDatos.find(figu => figu.id == idFigu)
    let alCarrito = new articulo(figurita, 1)

    carrito.setChanguito(alCarrito)
        
//    console.log(carrito.getChanguito());
//    console.log(carrito.getItemsChanguito());
    DibujaCarrito()
    
//    alert ('Figu ' + figurita.nombre + ' al carrito')

}
