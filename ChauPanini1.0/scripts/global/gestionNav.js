export const leeOpcionesNav = () => {
    let {pathname} = location
    let datos    
    let modo, ofertas, sinStock

    switch(pathname){
        case '/galeria/catalogo.html':
            modo = 'catalogo'
            datos = JSON.parse(localStorage.getItem("catalogoNav"))
            if (datos == null){ // carga valores por defecto
                datos = {
                    ofertas: 1, // muestra solo ofertas o no
                    sinStock: 0, // muestra solo articulos con stock o no
                    buscar: '', // patron de busqueda del nombre
                    pais: -1, // <-1> Todos, <0> Solo Logos de Selecciones, <1..32> pais
                    jugador : 0 // id de la figu
                }
            }
            ofertas = datos.ofertas
            sinStock = datos.sinStock
            break
            default:
                modo = 'galeria'
                datos = JSON.parse(localStorage.getItem("galeriaNav"))
                if (datos == null){ // carga valores por defecto
                    datos = {
                        buscar: '', // patron de busqueda del nombre
                        pais: 0, // <-1> Todos, <0> Solo Logos de Selecciones, <1..32> pais
                        jugador : 0 // id de la figu
                    }
                }
                ofertas = sinStock = 0
                break
        }

    let parametros = {
        modo: modo,
        ofertas: ofertas, 
        sinStock: sinStock, 
        buscar: datos.buscar,
        pais: datos.pais,
        jugador : datos.jugador
    }
//    console.log(parametros)
    grabaOpcionesNav(parametros)
    return(parametros);
}


export const grabaOpcionesNav = (parametros) => {
    let datosNav
   
    switch(parametros.modo){
        case 'catalogo':
            datosNav =  {
                ofertas: parametros.ofertas,
                sinStock: parametros.sinStock,
                buscar: parametros.buscar,
                pais: parametros.pais, 
                jugador : parametros.jugador
            }
            localStorage.setItem("catalogoNav", JSON.stringify(datosNav))
            break
        case 'galeria':
            datosNav =  {
                buscar: parametros.buscar,
                pais: parametros.pais, 
                jugador : parametros.jugador
            }
            localStorage.setItem("galeriaNav", JSON.stringify(datosNav))
    }
}

