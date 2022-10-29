import { leeOpcionesNav } from "../global/gestionNav.js"
import { VerArticulo } from "./VerArticulo.js"
import { VerCatalogo } from "./VerCatalogo.js"
import { cancelaPedido, VerPedido, VerPedidoFin} from "./VerPedido.js"

// paramFiltros -> variable global

export const GalRuteador = () =>{
    paramFiltros = leeOpcionesNav()
    //console.log(location)
    let {hash} = location

/*
El hash puede venir:
#pais_0 -> muestra solo los logos de cada pais
#pais_[1..32] -> muestra las figus de ese pais
#jugador_[1..cantidad de figus] -> muestra detalles de un jugador
#buscador -> ejecuta la busqueda en base al texto q tiene el input del buscador
#pedido -> muestra el contenido del carrito
cualquier otra opcion asume como #pais_0
*/    
    let arrayHash = hash.split('_')
    switch(arrayHash[0]){
        case '#articulo':
            VerArticulo(arrayHash[1])
            break
        case '#pedido':
            VerPedido()
            break
        case '#finaliza':
            VerPedidoFin()
            break
        case '#cierra':
            break
        case '#cancela':
            cancelaPedido()
            break
        case '#buscador':
            VerCatalogo()
            break
        default:
            VerCatalogo()
    }
}

