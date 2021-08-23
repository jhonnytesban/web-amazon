const btnMenu = document.getElementById('btn-menu')
const btnClose = document.getElementById('btn-close')
const nav = document.getElementById('nav')

btnMenu.addEventListener('click', () => {
  nav.classList.toggle('nav--active')
  nav.classList.toggle('nav--deactive')
})
btnClose.addEventListener('click', () => {
  nav.classList.toggle('nav--deactive')
  nav.classList.toggle('nav--active')
})