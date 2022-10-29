function leeUsr(){
    let datos = JSON.parse(localStorage.getItem("datosUsr"))
    if (datos == null){
        datos = {
            nombre: '',
            usuario: '',
            pass: ''
        }
    }
    return(datos);
}



function btn_crear(){
    let nombre = document.querySelector("#IDnombre").value;
    let usuario = document.querySelector("#IDusuario").value;
    let clave1 = document.querySelector("#IDclave1").value;
    let clave2 = document.querySelector("#IDclave2").value;
    let idFoco = '';
    if (nombre <= ' '){
        alert("Debes ingresar Nombre y Apellido")
        idFoco = "#IDnombre"
    } else if (usuario <= ' '){
        alert("Debes ingresar Nombre de Usuario")
        idFoco = "#IDusuario"
    } else if (clave1 <= ' '){
        alert("Debes ingresar una contraseña")
        idFoco = "#IDclave1"
    } else if (clave1 != clave2){
        alert("No se validaron las contraseñas")
        idFoco = "#IDclave2"
    }

    if (idFoco == ''){
        let datosUsr = {
            nombre: nombre,
            usuario: usuario,
            pass: clave1
        }
        localStorage.setItem("datosUsr", JSON.stringify(datosUsr))
        location.hash='#/'
    } else {
        document.querySelector(idFoco).focus();
    }
}


function btn_noCrear(){
    if (confirm("No se va a crear un nuevo usuario")){
        location.hash='#/'
    } else {
        document.querySelector('#IDnombre').focus();
    }
}



function btn_ingresar(){
    let nUsuario = document.querySelector("#IDusuario").value;
    let clave1 = document.querySelector("#IDclave").value;
    // console.log(datosUsr)
    let idFoco = '';
    if (nUsuario <= ' '){
        alert("Debes ingresar Nombre de Usuario")
        idFoco = "#IDusuario"
    } else if (clave1 <= ' '){
        alert("Debes ingresar una contraseña")
        idFoco = "#IDclave"
    } else if (nUsuario != datosUsr.usuario){
        alert("Usuario no registrado")
        idFoco = "#IDusuario"
    } else if (clave1 != datosUsr.pass){
        alert("La clave ingresada es incorrecta")
        idFoco = "#IDclave"
    }
    if (idFoco == ''){
        usuario = datosUsr.usuario
        clave = datosUsr.pass
        localStorage.setItem("usuario", usuario)
        localStorage.setItem("pass", clave)
        location.hash = (location.hash == '#/home')? '#/':'#/home';
    } else {
        document.querySelector(idFoco).focus();
    }
}

function btn_noIngresar(){
    if (confirm("Sin ingresar Usuario y clave no podrás iniciar seción")){
        location.hash = (location.hash == '#/home')? '#/':'#/home';
    } else {
        document.querySelector('#IDusuario').focus();
    }
}

function btn_cierraSesion(){
    usuario = clave = ''
    localStorage.setItem("usuario", usuario)
    localStorage.setItem("pass", clave)
    location.hash = (location.hash == '#/home')? '#/':'#/home';
}


