const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const btnSubMenu = document.getElementById('btn-submenu')
const btnSubMarcas = document.getElementById('btn-marcas')
const nav = document.getElementById("nav");

if (window.screen.width < 900) {
  btnMenu.addEventListener("click", () => {
    nav.classList.toggle("nav--active");
    nav.classList.toggle("nav--deactive");
  });
  btnClose.addEventListener("click", () => {
    nav.classList.toggle("nav--deactive");
    nav.classList.toggle("nav--active");
  });
  
  btnSubMenu.addEventListener("click", () => {
    btnSubMenu.classList.toggle("menu__models--deactive");
    btnSubMenu.classList.toggle("menu__models--active");
  });
  btnSubMarcas.addEventListener("click", () => {
    btnSubMarcas.classList.toggle("menu__marcas--deactive");
    btnSubMarcas.classList.toggle("menu__marcas--active");
  });
}
