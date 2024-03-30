
/*Open Menu*/

function openMenu(){

    const button = document.querySelector('.BtnMenu')
    const nav = document.querySelector('.navHeader')
    const openmenu = document.querySelector('.svgMenu')
    const closemenu = document.querySelector('.svgCloseMenu')

    button.addEventListener("click",()=>{
        nav.classList.toggle('activo')
        openmenu.classList.toggle('change')
        closemenu.classList.toggle('change')
    })
}
openMenu();

function redigirSecciones(){
    const links = document.querySelectorAll('.ulHeader a[href^="#"]')
    const navBar = document.querySelector('.navHeader')
    const OpenMenu = document.querySelector('.svgMenu')
    const CloseMenu = document.querySelector('.svgCloseMenu')
    links.forEach( links => {
        links.addEventListener("click",event=>{
            event.preventDefault();
            
            navBar.classList.remove('activo')
            OpenMenu.classList.remove('change')
            CloseMenu.classList.remove('change')
            


            const targetId = links.getAttribute('href').substr(1);
            const targetElement = document.getElementById(targetId);
            if(targetElement){
                targetElement.scrollIntoView({
                    behavior:'smooth'
                })
            }
        });
    });
}
redigirSecciones();



/*Nigth Mode */
const trigger = document.querySelector('.NigthModeLigthMode')
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')
const body = document.querySelector('.body')
const header = document.querySelectorAll('.ContainerHeader, .ContainerFotter')
const menuMD = document.querySelector('.svgCloseMenu')
const menuML = document.querySelector('.svgMenu')
const content = document.querySelectorAll('.h1, .p, .a, .svg')
const highlighted = document.querySelectorAll('.Highlighted')
const colorBigSections = document.querySelectorAll('.ContentCard, .ContainerHabilitesTechnologies, .ContainerHabilites, .ContainerTechnologies')

trigger.addEventListener('click', () =>{
    moon.classList.toggle('change')
    sun.classList.toggle('change')
    body.classList.toggle('change')
    header.forEach(element => {
        element.classList.toggle('change')
    })
    menuMD.classList.toggle('ModeDark')
    menuML.classList.toggle('ModeLigth')
    content.forEach(element => {
        element.classList.toggle('change')
    });
    highlighted.forEach(element => {
        element.classList.toggle('change')
    })
    colorBigSections.forEach(element => {
        element.classList.toggle('change')
    })

})

/*Download CV */
const CV = document.querySelector('.btnDownloadCV')

CV.addEventListener('click',()=>{
    const URL = 'assets/CV_GUSTAVO_NICOLAS_U_G.pdf';
    window.open(URL, '_blank');
})




/*Slider FirsProject*/

let imagenes = [
    "assets/202shots_so.jpg",
    "assets/207shots_so.jpg",
    "assets/455shots_so.jpg",
    "assets/640shots_so.jpg",
    "assets/970shots_so.jpg",

];

let imagesProject2 = [
    "assets/P2img1.png",
    "assets/P2img2.png",
    "assets/P2img3.png",
    "assets/P2img4.png",
    "assets/P2img5.png",
]

document.Imagen.src = imagenes[0];
document.ImagenProject2.src = imagesProject2[0];

let Contador = 0

function moveRight()
    {
        Contador++;
        if(Contador > imagenes.length -1){
            Contador = 0;
        }
        document.Imagen.src = imagenes[Contador];
        document.ImagenProject2.src = imagesProject2[Contador];

    }
let Intervalo = setInterval(moveRight, 3000)

function moveLeft()
    {
        Contador--;
        if(Contador < 0){
            Contador = imagenes.length -1;
        }
        document.Imagen.src = imagenes[Contador];
        document.ImagenProject2.src = imagenes[Contador];
    }