

export const nroVisita = () =>{
    let cont = localStorage.getItem('visitas')
    if (isNaN(cont)){
        cont = 0;
    }
    localStorage.setItem('visitas', ++cont)
    return(cont)
}


