
export const Naveg = () => {
    let Naveg = document.createElement("nav");

    let {pathname, hash} = location

    switch (pathname){
        case '/galeria/catalogo.html':
            Naveg.innerHTML = `
                <div class="NAVnavegador">
                <div>
                    <ul class="NAVtxtMenu NAVMenu">
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="#/">Galería</a></li>
                        <li><a href="#/">Ver Album</a></li>
                        <li><a href="#/">Quienes Somos</a></li>
                        <li><a href="#/">Contactos</a></li>
                    </ul>
                    <ul class="NAVicoMenu NAVMenu">
                        <li><a href="../index.html"><i class="ic-home"></i></a></li>
                        <li><a href="#/"><i class="ic-libro-ab"></i></a></li>
                        <li><a href="#/"><i class="ic-figus"></i></a></li>
                        <li><a href="#/"><i class="ic-info"></i></a></li>
                        <li><a href="#/"><i class="ic-mail2"></i></a></li>
                    </ul>
                </div>
                </div>
            `;
            break
        }
    return(Naveg);
}