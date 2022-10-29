
// ajax q se le pasa un objeto con 2 propiedades. url y una funcion
// se usa
// await leeAjax({
//    url : "/modelo/JSON/indexCards.json",
//    funcion : (datos) => glob = datos 
//})
export const leeAjax = async (propiedades) => {
    let {url, funcion, fxError} = await propiedades;
    await fetch(url)
        .then(respuesta => respuesta.json())
            .then( datos => funcion(datos) ) // .datos es un array de datos que vienen del fetch
        .catch(fxError())
}

// ajax q se le pasa url de argumento y devuelve un dato
// se usa : glob = await ajaxAsync({url:"/modelo/JSON/indexCards.json"})

export const ajaxAsync = async (propiedades) =>{
    let {url} = propiedades;
    let resultado; 
    try {
        let respuesta =  await fetch(url);
        resultado =  await  respuesta.json()
    } catch {            
        resultado = []
    }
//    console.log(resultado)
    return(resultado)

} 