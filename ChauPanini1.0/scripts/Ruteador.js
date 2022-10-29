import { contenedorFigus } from "./galeria/GalTarjetas.js"
import { buscar, verPais, verPaises } from "./global/filtros.js"
import { nuevoUsr, ingresoUsr, logoutUsr } from "./IndexGestionUsr.js"
import { contenedorTarjetas, errorTarjetas } from "./IndexTarjetas.js"


export const Ruteador = () =>{

    let listaCriterios =['buscar', 'pais', 'selecciones']
    let arrayFiltrado = []

//    console.log(location)
    let {pathname, hash, search} = location

    let criterio = search.substring(1, search.indexOf("=")).toLowerCase(); // extrae desde posicion 1 (2da letra) hasta q encuentra un "=" y lo pasa a minuscula
    let valor;
    if (listaCriterios.includes(criterio)){ // chequea si <<criterio>> tiene un valor valido
        valor = new URLSearchParams(search).get(criterio) //trae dato de la estructura ...html?buscar=1234 -> <<criterio>> = 'buscar' -> <<valor>> vale '1234' (alfanum)
    } else {
        criterio = valor= ''
    }
    //console.log(criterio + '/' + valor)

    switch (pathname){
        case "/":
        case '/index.html':
            switch (hash){
                case '':
                case '#/':
                case '#/home':
                    if (arrayDatos.length > 0){
                        document.querySelector("#main").append(contenedorTarjetas(arrayDatos))
                    } else {
                        errorTarjetas()
                    }
                    break;
                case '#/ingreso':
                    document.querySelector("#main").append(ingresoUsr())
                    document.querySelector("#Ingresar").addEventListener("click", btn_ingresar)
                    document.querySelector("#Cancelar").addEventListener("click", btn_noIngresar)
                    break;
                case '#/nuevoUsr':
                    document.querySelector("#main").append(nuevoUsr())
                    document.querySelector("#Confirmar").addEventListener("click", btn_crear)
                    document.querySelector("#Cancelar").addEventListener("click", btn_noCrear)
                    break;
                case '#/logout':
                    logoutUsr()
                    break;
                case '#perfil':
                    break;
            }
        break;
        case '/galeria/galeria.html':
            switch (hash){
                case '':
                case '#/':
                case '#/catalogo':
                    switch (criterio){
                        case 'buscar':
                            arrayFiltrado = buscar(valor, arrayDatos)
                            break;
                        case 'pais':
                            arrayFiltrado = verPais(valor, arrayDatos)
                            break;
                        case 'selecciones':
                            arrayFiltrado = verPaises(arrayDatos)
                            break;
                        default:
                            arrayFiltrado = arrayDatos    
                    }
                    if (arrayFiltrado.length > 0){
                        document.querySelector("#main").append(contenedorFigus(arrayFiltrado))
                    } else {
                        errorTarjetas()
                    }
                    break;
            }
        break;
    }
}

/*
///en-US/docs/prueba.html?q=123#home
const queryString = location.search; // Returns:'?q=123'
const queryString = location.hash; // Returns:'home'
const params = new URLSearchParams(queryString);
const q = parseInt(params.get("q")); // is the number 123
*/