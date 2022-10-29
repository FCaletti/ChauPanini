import { leeAjax } from "./global/ajax.js";
import { Dibujar } from "./IndexApp.js";
import urlJson from "./global/urls.js"

// arrayDatos -> variable global


const ProcesoPrincipal = async () => {
    await leeAjax({
        url : urlJson.INDEX,
        funcion : (datos) => arrayDatos = datos,
        fxError : () => arrayDatos = []
    })
//    console.log(arrayDatos)
    Dibujar();
    window.addEventListener("hashchange", Dibujar);
}

document.addEventListener("DOMContentLoaded", ProcesoPrincipal);

