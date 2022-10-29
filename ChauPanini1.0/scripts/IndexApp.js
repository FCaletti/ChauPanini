import { Header } from "./global/Header.js";
import { Main } from "./global/Main.js";
import { Footer } from "./global/Footer.js";
import { Ruteador } from "./Ruteador.js";


export const Dibujar = () => {
    let divRaiz = document.querySelector("#raiz");
    divRaiz.innerHTML = "";

    divRaiz.appendChild(Header()); // muestro el header
    divRaiz.appendChild(Main()); // crea un main vacio. Se llena al ajecutar ruteador
    divRaiz.appendChild(Footer()); // muestro el footer

    Ruteador()
    
//    console.dir(location);
}