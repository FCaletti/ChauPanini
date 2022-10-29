// usuario -> variable global


export const contenedorTarjetas = (datos) => {
    let div = document.createElement("div");
    div.className = "INXgrllaLogos"
    datos.map( tarjeta => {
        div.innerHTML += VerTarjeta(tarjeta)
    })
    return(div);
}

export const VerTarjeta = (datoTarj) => {
    let tarjeta;
    let {id, texto, svg, condicion, link} = datoTarj;
    if ((usuario > ' ' && condicion == 'sinUSR' ) || (usuario <= ' ' && condicion == 'conUSR')){
        tarjeta = ' '
    } else {
        tarjeta = `
            <a href="${link}" class="INXlogo" data-tipo="global" id="${id}">
                <div class="INXiconoTxt">${texto}</div>
                <div class="INXicono"><i class="${svg}"></i></div>
            </a>
        `
    }
    return(tarjeta);
}

export const errorTarjetas = () => {
    let div = document.createElement("div");
    div.className = "INXgrllaLogos"
    div.innerText = "Error al leer datos de la página"
}

