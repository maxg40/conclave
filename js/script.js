const botonLogo = document.querySelector('.contenedorLogo');
const contenedorMenu = document.body;

botonLogo.onclick =() =>{
    contenedorMenu.innerHTML = `<button class="menuDesplegable"><img src="./img/contacto.png" alt="contacto"></button>
    <button class="contenedorLogo"><img class="logo" src="./img/conclave letra.png" alt="logo de banda conclave"></button>
    <button class="menuDesplegable2"><img src="./img/show.png" alt="shows/presentaciones"></button>
    <button class="menuDesplegable3"><img src="./img/integrantes.png" alt="integrantes"></button>
    <button class="menuDesplegable4"><img src="./img/temas.png" alt="temas"></button>`

};