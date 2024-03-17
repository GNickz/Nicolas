
const button = document.querySelector('.BtnMenu');
const nav = document.querySelector('.navHeader');
const menu = document.querySelector('.svgMenu');
const closemenu = document.querySelector('.svgCloseMenu');

button.addEventListener('click', () => {
    nav.classList.toggle('activo');
    menu.classList.toggle('change');
    closemenu.classList.toggle('change');
});

const trigger = document.querySelector('.NigthModeLigthMode')
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')
const body = document.querySelector('.body')
const header = document.querySelector('.ContainerHeader')
const menuMD = document.querySelector('.svgCloseMenu')
const menuML = document.querySelector('.svgMenu')

trigger.addEventListener('click', () =>{
    moon.classList.toggle('change')
    sun.classList.toggle('change')
    body.classList.toggle('change')
    header.classList.toggle('change')
    menuMD.classList.toggle('ModeDark')
    menuML.classList.toggle('ModeLigth')

})
