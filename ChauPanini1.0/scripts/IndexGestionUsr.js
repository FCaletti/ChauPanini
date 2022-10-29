export const nuevoUsr = () => {
    let div = document.createElement("div");
    div.className = "USRdatos"
    div.innerHTML = `
        <div class="USRtitulo2">Crear Nuevo Usuario</div>
        <label for="IDnombre"> Nombre y Apellido :</label>
        <input type="text" name="nombre" id="IDnombre">
        <label for="IDusuario">Nombre Usuario :</label>
        <input type="text" name="usuario" id="IDusuario">
        <label for="IDclave1">Contraseña :</label>
        <input type="password" name="clave1" id="IDclave1">
        <label for="IDclave2">Repetir Contraseña :</label>
        <input type="password" name="clave2" id="IDclave2">
        <div class="USRtitulo2">
            <div class="USRbotonera">
                <a><button id="Confirmar"><i class="ic-baby"></i>&nbsp;&nbsp; Crear Usuario</button></a>
                <a><button id="Cancelar"><i class="ic-cruz"></i>&nbsp;&nbsp; Cancelar</button></a>
            </div>
        </div>
    `
    return(div);
}


export const ingresoUsr = () => {
    let div = document.createElement("div");
    div.className = "USRdatos USRingreso"
    div.innerHTML = `
        <div class="USRtitulo2">Ingresar Usuario</div>
        <label for="IDusuario">Nombre Usuario :</label>
        <input type="text" name="usuario" id="IDusuario">
        <label for="IDclave1">Contraseña :</label>
        <input type="password" name="clave" id="IDclave">
        <div class="USRtitulo2">
            <div class="USRbotonera">
                <a><button id="Ingresar"><i class="ic-user"></i>&nbsp;&nbsp; Ingresar</button></a>
                <a><button id="Cancelar"><i class="ic-cruz"></i>&nbsp;&nbsp; Cancelar</button></a>
            </div>
        </div>
    `
    return(div);
}

export const logoutUsr = () => {
    usuario = clave = ''
    localStorage.setItem("usuario", usuario)
    localStorage.setItem("pass", clave)
    if (location.hash == '#/home'){
        location.hash = '#/home'
    } else{
        location.hash='#/home'
    }
}
