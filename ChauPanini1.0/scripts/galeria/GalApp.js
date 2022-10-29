import { Footer } from "../global/Footer.js";
import { Header } from "../global/Header.js";
import { Main } from "../global/Main.js";
import { Naveg } from "../global/Naveg.js";
import { Aside } from "../global/Aside.js";
import { Pegajoso } from "../global/Pegajoso.js";
import { GalRuteador } from "./GalRuteador.js";
import { grabaOpcionesNav } from "../global/gestionNav.js";
import { cierraPedido } from "./VerPedido.js";



export const Dibujar = () => {
    let divRaiz = document.querySelector("#raiz");
    divRaiz.innerHTML = "";

    divRaiz.appendChild(Header());
    divRaiz.appendChild(Naveg());
    divRaiz.appendChild(Aside());
    divRaiz.appendChild(Main());
    divRaiz.appendChild(Footer());
    divRaiz.appendChild(Pegajoso());

    GalRuteador()

}

export const DibujarVacio = () => {
    let divRaiz = document.querySelector("#raiz");
    divRaiz.innerHTML = "";

    let arrayHash = location.hash.split('_')
    switch(arrayHash[0]){
        case '#articulo':
            divRaiz.className = 'grillaArt'
            divRaiz.appendChild(Header());
            divRaiz.appendChild(Naveg());
            divRaiz.appendChild(Main());
            divRaiz.appendChild(Footer());
            divRaiz.appendChild(Pegajoso());
            break
        case '#pedido':
        case '#finaliza':
        case '#cierra':
        case '#cancela':
            divRaiz.className = 'grillaVer'
            divRaiz.appendChild(Header());
            divRaiz.appendChild(Naveg());
            divRaiz.appendChild(Main());
            divRaiz.appendChild(Footer());
            break
        default:
            divRaiz.className = 'grillaGal'
            divRaiz.appendChild(Header());
            divRaiz.appendChild(Naveg());
            divRaiz.appendChild(Aside());
            divRaiz.appendChild(Main());
            divRaiz.appendChild(Footer());
            divRaiz.appendChild(Pegajoso());
            break
    }
}

export const DibujarDatos = () => {
    GalRuteador();
}



export const AnalizaHash = () => {

    let {hash} = location
/*
El hash puede venir:
#pais_0 -> muestra solo los logos de cada pais
#pais_[1..32] -> muestra las figus de ese pais
#jugador_[1..cantidad de figus] -> muestra detalles de un jugador
#buscador -> ejecuta la busqueda en base al texto q tiene el input del buscador
cualquier otra opcion asume como #pais_0
*/    
    let arrayHash = hash.split('_')
    switch(arrayHash[0]){
        case '#articulo':
            break
        case '#pedido':
            break
        case '#finaliza':
            break
        case '#cierra':
            cierraPedido()
            break
        case '#cancela':
            break
        case '#/':
            break
        case '#buscador':
            paramFiltros.buscar = document.querySelector("#TextoBuscado").value
            grabaOpcionesNav(paramFiltros)
            break
        default:
            if (arrayHash[0] != '#pais'){
                arrayHash[0] = '#pais'
                arrayHash[1] = 0
            }
            paramFiltros.pais = (isNaN(parseInt(arrayHash[1])))? 0 : parseInt(arrayHash[1])
            grabaOpcionesNav(paramFiltros)
        }

//    console.log(paramFiltros)

    DibujarVacio()
    DibujarDatos();
}


export const chkbMenu = () =>{
    paramFiltros.ofertas = (document.querySelector('#MNLidOferta').checked)? 1 : 0;
    paramFiltros.sinStock = (document.querySelector('#MNLidSinStock').checked)? 1 : 0;
    grabaOpcionesNav(paramFiltros)
    DibujarDatos();

}
