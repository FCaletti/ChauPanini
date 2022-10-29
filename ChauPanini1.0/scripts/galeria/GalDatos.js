
export const actualizaStock = (id, cantidad, modo) => { // modo = <E>ntrada  <S>alida
    let idx = arrayDatos.findIndex( figu => figu.id == parseInt(id))
    if (idx > -1){
        switch (modo){
            case 'E' :
                arrayDatos[idx].existencia += cantidad
                break
            case 'S':
            arrayDatos[idx].existencia = (cantidad > arrayDatos[idx].existenca)? 0 : arrayDatos[idx].existencia - cantidad
        }
    }
}

export const datoPorID = (id) =>{
    let idx = arrayDatos.findIndex( figu => figu.id == parseInt(id))
    return (arrayDatos[idx])
}



