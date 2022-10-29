import { leeAjax } from "../global/ajax.js"
import { verPaises } from "../global/filtros.js"
import urlJson from "../global/urls.js"
import { AnalizaHash, DibujarDatos, DibujarVacio } from "./GalApp.js"

const ProcesoPrincipal = async () => {
    await leeAjax({
        url: urlJson.ALBUM,
        funcion : (datos) => {
            arrayDatos = datos
            arrayPaises = verPaises(datos)
            },
        fxError : () => arrayDatos = []
    })

    DibujarVacio();
    DibujarDatos();

    window.addEventListener("hashchange",AnalizaHash);

    
}

document.addEventListener("DOMContentLoaded", ProcesoPrincipal);

