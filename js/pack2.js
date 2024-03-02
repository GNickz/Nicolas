/*Responsive menu*/ 
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
});
/*Rotation svg menu*/
const contenedor = document.querySelector('.button')
const barra = document.querySelector('.svg')

contenedor.addEventListener('click',()=>{
    barra.classList.toggle('rotate')
});

/*Nigth Mode */

const trigger = document.querySelector('.NigthMode')
const container = document.querySelector('.BodyPack2')
const moon = document.querySelector('.moon')
const header = document.querySelector('.ContainerHeader')
const menu = document.querySelectorAll('.h1, .a')
const desplegable = document.querySelector('.svg')

trigger.addEventListener('click',()=>{
    container.classList.toggle('change')
    moon.classList.toggle('change')
    desplegable.classList.toggle('change')
    menu.forEach(element => {
        element.classList.toggle('change');
    });
    header.classList.toggle('change')
    
});


/*Slider*/

let imagenes = [
    "/assets/Imagen-Uno.jpg",
    "/assets/Imagen-Dos.jpg",
    "/assets/Imagen-Tres.jpg",
    "/assets/Imagen-Cuatro.jpg"
];
document.Imagen.src = imagenes[0];


const rigth = document.querySelector('.directionRigth');
const left = document.querySelector('.directionLeft')

let Contador = 0

function moveRigth()
    {
        Contador++;
        if(Contador > imagenes.length -1){
            Contador = 0;
        }
        document.Imagen.src = imagenes[Contador];
    }
let Intervalo = setInterval(moveRigth, 5000)
rigth.addEventListener('click', function(){
    clearInterval(Intervalo);
    moveRigth();
    Intervalo = setInterval(moveRigth, 5000)
});

function moveLeft()
    {
        Contador--;
        if(Contador < 0){
            Contador = imagenes.length -1;
        }
        document.Imagen.src = imagenes[Contador];
    }
left.addEventListener('click',moveLeft);

