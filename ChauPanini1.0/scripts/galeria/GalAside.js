import arrays from "../global/arrays.js"
import { verPaisesXGrupo } from "../global/filtros.js"


export const GalAside = () =>{
    document.querySelector('#aside').innerHTML=''
 /* agrega elmenu hamburguesa*/   
    let InputHamb = document.createElement('input')
    InputHamb.type = "checkbox"
    InputHamb.id = "MNLmenu"
    document.querySelector('#aside').append(InputHamb)
    let LabelHamb = document.createElement('label')
    LabelHamb.className = "MNLlblMenu"
    LabelHamb.setAttribute("for", "MNLmenu")
    LabelHamb.textContent = "☰"
    document.querySelector('#aside').append(LabelHamb)

    /*agrega la lista de opciones*/
    document.querySelector('#aside').append(menuLateral())

}



const menuLateral = () =>{
    let div = document.createElement("div")
    div.className = "MNLnavegador"
    let arrayGrupos = arrays.ARRAYGRUPOS;
    let cont = 0
    let chkOfertas = (paramFiltros.ofertas == 1)? 'checked' : ''
    let chkSinStock = (paramFiltros.sinStock == 1)? 'checked' : ''
    // pinta la opcionde solo ofertas.

    div.innerHTML = `
        <div class="MNLOferta">
            <input type="checkbox" id="MNLidOferta" ${chkOfertas}>
            <label for="MNLidOferta">&nbsp;  Solo Ofertas</label>
        </div>
        <div class="MNLOferta">
            <input type="checkbox" id="MNLidSinStock" ${chkSinStock}>
            <label for="MNLidSinStock">&nbsp;  Lista sin Stock</label>
        </div>
        `
    // si hay algun filtro de pais aplicado, muestra la opcion de quitar el filtro
    if (paramFiltros.pais >= 0){
        div.innerHTML += `
            <div class="MNLlblCat000">
                <a href="#pais_-1"><i class="ic-esfera"></i>&nbsp;Todos los paises</a>
            </div>
            `
    }
    
    // pinta la opcion de solo selecciones

    div.innerHTML += `
        <div class="MNLlblCat000">
            <a href="#pais_0">Selecciones</a>
        </div>
        `

        // pinta los grupos

    arrayGrupos.forEach((grupo) => {
        div.innerHTML+= pintaGrupo(grupo, ++cont)
    })

    return (div)
}

const pintaGrupo = (codGrupo, cont) => {
    let indice = ('000'+cont).slice(-3) // 3 digitos y completo con 0 a la izquierda
    let paises = verPaisesXGrupo(codGrupo, arrayDatos)

    let grupo = `
        <div>
            <input type="checkbox" id="MNLidCat${indice}">
            <label class="MNLlblCat${indice}" for="MNLidCat${indice}">
                Grupo ${codGrupo.toUpperCase()}
                <span class="MNLSegnal"><i class="ic-angulo-der"></i></span>
            </label>
            <ul class="MNLulCat${indice.slice(-3)}">
        `
    paises.forEach((pais) =>
        grupo += `<li><a href="#pais_${pais.pais}">${pais.nombre}</a></li>`
    )
    grupo += `
            </ul>
        </div>
        `
    
    return(grupo)
}

