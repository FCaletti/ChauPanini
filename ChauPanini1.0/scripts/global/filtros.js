

export const buscar = (cadena, arreglo) =>{
    let text2 = cadena.trim().toLowerCase(); // elimina espacios en los extremos y pasa a minusculas
    return arreglo.filter((figu) =>
        figu.nombre.toLowerCase().includes(text2)
        )
}

export const verPais = (codPais, arreglo) =>{
    return arreglo.filter((figu) =>
        figu.pais == codPais 
    )
}


export const verPaises = (arreglo) =>{
    return arreglo.filter((figu) =>
        figu.orden == 0 
    )
}


export const verOfertas = (arreglo) =>{
    return arreglo.filter((figu) =>
        figu.oferta == 1 
    )
}

export const verSinStock = (arreglo) =>{
    return arreglo.filter((figu) =>
        figu.existencia > 0 
    )
}


export const verPaisesXGrupo = (cadena, arreglo) =>{
    return arreglo.filter((figu) =>
        figu.grupo.toUpperCase() == cadena.toUpperCase()  &&
        figu.orden == 0 
    )
}
