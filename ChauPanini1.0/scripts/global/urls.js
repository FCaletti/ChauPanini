// tengo las rutas q voy a usar para las peticiones. Aca las traigo desde una API. Asigno cada url a constantes q luego exporto 
const INDEX = "/datos/JSON/indexCards.json",
//    ALBUM= "/datos/JSON/figusTodas.json"
//    ALBUM= "/datos/JSON/figus.json"
    ALBUM= "/datos/JSON/figusNuevo.json",
    IMAGENES='/recursos/Img/figus/'

export default { // exporto como default (se puede uno por archivo). Cuando la importo, debo ponerle el nombre en ese momento. (ver Router.js)
    INDEX,
    ALBUM,
    IMAGENES
}

