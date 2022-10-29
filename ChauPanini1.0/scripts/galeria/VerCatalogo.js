import { escucharBotones, contenedorFigus, errorFigus } from "./GalTarjetas.js"
import { buscar, verOfertas, verPais, verPaises, verSinStock } from "../global/filtros.js"
import { GalAside } from "./GalAside.js"
import { leeOpcionesNav } from "../global/gestionNav.js"
import { chkbMenu } from "./GalApp.js"
import { DibujaCarrito } from "./GalCarrito.js"
import { borraBusqueda, haceBusqueda } from "../global/Header.js"

// paramFiltros -> variable global

export const VerCatalogo = () =>{
    paramFiltros = leeOpcionesNav()
    document.querySelector("#TextoBuscado").value = paramFiltros.buscar
    let arrayFiltrado = []
    let arrayTmp = []
    let valor

/*
El hash puede venir:
#pais_0 -> muestra solo los logos de cada pais
#pais_[1..32] -> muestra las figus de ese pais
#buscador -> ejecuta la busqueda en base al texto q tiene el input del buscador
*/    
//     primero aplico el filtro por pais
    valor = (isNaN(parseInt(paramFiltros.pais)))? 0 : parseInt(paramFiltros.pais);
            
    if (valor > 32){
        valor = 0
    }
    switch (valor){
        case -1 :
            arrayFiltrado = arrayDatos
            break
        case 0:
            arrayFiltrado = verPaises(arrayDatos)
            break
        default:
            arrayFiltrado = verPais(valor, arrayDatos)
    }
//    filtro si solo se muestran ofertas
    if (paramFiltros.ofertas == 1){
        arrayTmp = arrayFiltrado
        arrayFiltrado = verOfertas(arrayTmp)
    }

//    filtro si muestran sin stock
    if (paramFiltros.sinStock == 0){
        arrayTmp = arrayFiltrado
        arrayFiltrado = verSinStock(arrayTmp)
    }

//   filtro si hay un texto de busqueda
    if (paramFiltros.buscar > ' '){
        arrayTmp = arrayFiltrado
        arrayFiltrado = buscar(paramFiltros.buscar, arrayTmp)
    }
    
    GalAside()

    document.querySelector("#main").innerHTML=''
    let leyError = ''
    if (arrayFiltrado.length > 0){
        document.querySelector("#main").append(contenedorFigus(arrayFiltrado))
        escucharBotones(document.querySelectorAll(".botonComprar")) // agrego escuchador de click a cada boton de comprar
    } else {
//        console.log(arrayFiltrado)
        if (arrayHash[0] == '#buscador'){
            leyError = 'UPS! No se encontraron figus con el texto "' + paramFiltros.buscar + '". Intenta con otras opciones.'
        } else {
            leyError = 'UPS! No se encontraron figus. Intenta con otras opciones.'
        }
        document.querySelector("#main").append(errorFigus(leyError))
    }
    DibujaCarrito();

    document.querySelector('#MNLidOferta').addEventListener('change',chkbMenu)
    document.querySelector('#MNLidSinStock').addEventListener('change',chkbMenu)
    document.querySelector('#IDhaceBusqueda').addEventListener('click',haceBusqueda)
    document.querySelector('#IDborraBusqueda').addEventListener('click',borraBusqueda)

}

/*
///en-US/docs/prueba.html?q=123#home
const queryString = location.search; // Returns:'?q=123'
const queryString = location.hash; // Returns:'home'
const params = new URLSearchParams(queryString);
const q = parseInt(params.get("q")); // is the number 123
*/