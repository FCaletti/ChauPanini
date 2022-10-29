
class articulo{
    constructor(figu, cantidad){
        this.id = figu.id;
        this.cantidad = parseInt(cantidad);
        this.precio = parseFloat(figu.precio);
        this.imagen = figu.imagen;
        this.existencia = figu.existencia;
        if (figu.orden == 0){
            this.nombre = figu.nombre + '  (' + figu.coi + ')';
            this.nombre2 = figu.confederacion
        } else {
            this.nombre = figu.nombre;
            let verPais = arrayPaises.find((pais) => pais.pais == figu.pais )
            this.nombre2 = '(' + figu.coi + ')' + ' ' + verPais.nombre
        }
    }

    ctrlStock(comprado, compra){
        let necesario = comprado + compra
        return (necesario <= this.existencia);
    }
}




class changuito{
    constructor(){
        let contenido = JSON.parse(localStorage.getItem("changuito"))
        if (contenido == null){
            this.lista = []
        } else {
            this.lista = contenido
        }
    }

    getChanguito(){
//        this.lista = JSON.parse(localStorage.getItem("changuito"))
        return(this.lista)
    }

    getItemsChanguito(){
        let cont = 0;
        this.lista.forEach(elem => {
            if (elem != null){
                cont += elem.cantidad
            }
        })
        return(cont)
    }

    getItemForID(id){
        let idx = this.lista.findIndex(figu => figu.id == parseInt(id))
        return(this.lista[idx])
    }
    
    setChanguito(articulo){

        let {id, cantidad, precio, nombre, imagen, nombre2, existencia} = articulo
        let yaExiste = this.lista.findIndex(elem => elem.id === id)

        if (yaExiste == -1){
            this.lista.push({
                "id": id,
                "cantidad": cantidad,
                "precio": precio,
                "nombre": nombre,
                "imagen": imagen,
                "nombre2": nombre2,
                "existencia": existencia
            })
        } else {
            if (articulo.ctrlStock(this.lista[yaExiste].cantidad, cantidad)){
                this.lista[yaExiste].cantidad++
            } else {
                alert ("Stock agotado")
            }
        }
        localStorage.setItem("changuito", JSON.stringify(this.lista))    
    }

    restaCant(id, numero){

        let totItem = 0, totCompra = 0;
        let idx = this.lista.findIndex(figu => figu.id == id)

        if (this.lista[idx].cantidad != 0){
            this.lista[idx].cantidad = (numero > this.lista[idx].cantidad)? 0 : this.lista[idx].cantidad - numero
            localStorage.setItem("changuito", JSON.stringify(this.lista)) 
        }

        totItem = this.lista[idx].cantidad * this.lista[idx].precio
        this.lista.forEach(figu => totCompra += figu.cantidad * figu.precio)

        return ({
            cantidad: this.lista[idx].cantidad,
            totItem: totItem,
            totCompra : totCompra
        })
    }


    sumaCant(id, numero){

        let totItem = 0, totCompra = 0;
        let idx = this.lista.findIndex(figu => figu.id == parseInt(id))
//        console.log(this.lista[idx].existencia)
        if (this.lista[idx].cantidad < this.lista[idx].existencia){
            this.lista[idx].cantidad = this.lista[idx].cantidad + numero
            localStorage.setItem("changuito", JSON.stringify(this.lista)) 
        }
//        console.log(this.lista[idx].cantidad)

        totItem = this.lista[idx].cantidad * this.lista[idx].precio
        this.lista.forEach(figu => totCompra += figu.cantidad * figu.precio)

        return ({
            cantidad: this.lista[idx].cantidad,
            totItem: totItem,
            totCompra : totCompra
        })
    }

    borraItem(id){

        let idx = this.lista.findIndex(figu => figu.id == parseInt(id))
        this.lista.splice(idx, 1)
        localStorage.setItem("changuito", JSON.stringify(this.lista)) 
    }

    getTotalChanguito(){
        let total = 0;
        this.lista.forEach(elem => total += (elem.cantidad * elem.precio))
        return(total)
    }

    vaciaChanguito(){
        this.lista = []
        localStorage.setItem("changuito", JSON.stringify(this.lista)) 
    }
}

let interes = [
    {cuotas:1, interes:0},
    {cuotas:3, interes:10},
    {cuotas:6, interes:20},
    {cuotas:12, interes:30}
] 
let carrito = new changuito();
let paramFiltros // variables usadas en filtros y vistas
let arrayDatos = []; //creo array donde se van a guardar los datos de la figus
let arrayPaises = []; //creo array donde se van a guardar los datos solo de los paises

let datosUsr = leeUsr() // cargo los datos del usuario
// obtengo valores del usuario activo
let usuario = (localStorage.getItem("usuario") == null)? '' : localStorage.getItem("usuario")
let clave = (localStorage.getItem("pass") == null)? '' : localStorage.getItem("pass")
if (usuario != datosUsr.usuario || clave != datosUsr.pass){ 
    usuario = pass = ''
}
