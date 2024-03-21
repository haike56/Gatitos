
let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function (){
    nave = document.querySelector(".nave");
    nave.classList.toggle("active")
};





let titulo = document.querySelector(".logo .log");
console.log(titulo);

titulo.innerHTML = "Miau"


let nombre = "Dey";
let ciudad = "LI";
let gusto = "divertido";

let parrafo = document.querySelector(".gg");


function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `Mi nombre es ${nombre}, nací en Perú y vivo en ${ciudad}, me gusta lo ${gusto} y por ende esta página intentará tener ese estilo, y creo que está de más decir que... adoro a los gatos.`;

    return contenido;
}



