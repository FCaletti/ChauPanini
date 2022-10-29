// usuario / datosUsr.* -> globales

import { GalRuteador } from "../galeria/GalRuteador.js";
import { grabaOpcionesNav } from "./gestionNav.js";
import { nroVisita } from "./leeLocalStorage.js";

export const Header = () => {
    let Header = document.createElement("header");
    let saludo = (usuario > ' ')? 'Hola ' + datosUsr.nombre : 'Bienvenida/o';

    let {pathname, hash} = location
    let arrayHash = hash.split('_')
    let txtBuscador = ''

    //console.log(location)
    switch (pathname){
        case "/":
        case '/index.html':
            Header.innerHTML = `
                <div class="ENCcontenedor">
                    <img class="ENClogo" src="/recursos/Img/logoQatar.PNG" alt="">
                    <div class="ENCtitulo">
                        <t1>Chau</t1><t2>&nbsp;Panini</t2>
                    </div>
                    <div class="ENCusuario">
                        <div id="Saludo" class="CartelID">${saludo}</div>
                        <div id="visita" class="CartelVisita">Es tu visita numero ${nroVisita()}</div>
                    </div>
                </div>
            `;
            break
        case '/galeria/catalogo.html':

            switch(arrayHash[0]){
                case '#articulo':
                case '#pedido':
                case '#finaliza':
                case '#cierra':
                case '#cancela':
                    txtBuscador = '&nbsp'
                    break
                default:
                    txtBuscador = `
                        <input type="text" id="TextoBuscado">
                        <div class="ENClblCheckBox" id="IDhaceBusqueda"><i class="ic-lupa"></i></div>
                        <div class="ENClblCheckBox" title="Borra el texto de búsqueda" id="IDborraBusqueda"><i class="ic-cruz"></i></div>
                    `
            }
        
            Header.innerHTML = `
                <div class="ENCcontenedor">
                    <img class="ENClogo" src="/recursos/Img/LogoQatar.PNG" alt="">
                    <div class="ENCtitulo">
                        <t1>Chau</t1><t2>&nbsp;Panini</t2>
                    </div>
                    <div class="ENCusuario">
                        <div id="Saludo" class="CartelID" title="Haz clic aquí para identificarte">${saludo}</div>
                        <div class="ENCbuscador">
                            ${txtBuscador}
                        </div>
                    </div>
                </div>
                `;
                break
        }
    return(Header);
}


export const borraBusqueda = () =>{
    document.querySelector("#TextoBuscado").value = paramFiltros.buscar = ''
    grabaOpcionesNav(paramFiltros);
    GalRuteador()
}

export const haceBusqueda = () => {
    paramFiltros.buscar = document.querySelector("#TextoBuscado").value 
    grabaOpcionesNav(paramFiltros);
    GalRuteador()
}