
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
const content = document.querySelectorAll('.h1, .p, .a, .svg, .lbl, .input')
const highlighted = document.querySelectorAll('.Highlighted')
const colorBigSections = document.querySelectorAll('.ContentCard, .ContainerHabilitesTechnologies, .ContainerHabilites, .ContainerTechnologies, .ContentContactMe')
const colorInterSections = document.querySelectorAll('.ProjectTools, .BtnLinkProject')
const colorImgTechnologies = document.querySelectorAll('.img-swiper')

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
    colorInterSections.forEach(element => {
        element.classList.toggle('change')
    })
    colorImgTechnologies.forEach(element =>{
        element.classList.toggle('change')
    })

})

/*Download CV */
const CV = document.querySelector('.btnDownloadCV')

CV.addEventListener('click',()=>{
    const URL = 'assets/CV-Gustavo.pdf';
    window.open(URL, '_blank');
})




/*Slider FirsProjects*/

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

let imagesProject3 = [
    "assets/p3img1.png",
    "assets/p3img2.png",
    "assets/p3img3.png",
    "assets/p3img4.png",
    "assets/p3img5.png",
]

document.Imagen.src = imagenes[0];
document.ImagenProject2.src = imagesProject2[0];
document.ImagenProject3.src = imagesProject3[0];

let Contador = 0

function moveRight()
    {
        Contador++;
        if(Contador > imagenes.length -1){
            Contador = 0;
        }
        document.Imagen.src = imagenes[Contador];
        document.ImagenProject2.src = imagesProject2[Contador];
        document.ImagenProject3.src = imagesProject3[Contador];

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
        document.ImagenProject3.src = imagenes[Contador];

    }


    /*Technologies Swiper.js*/

    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 15,
            stretch: 0,
            depth:230,
            modifier: 1,
            slideShadows:false,
        },
        loop: true,
    });

    /*Send Email */
   
    function sendemail(){

        const inputname = document.getElementById('name').value;
        const inputemail = document.getElementById('email').value;
        const inputquestion = document.getElementById('question').value;
        const inputmessage = document.getElementById('message').value;

        const textRegex = /^[^\d]+$/;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if(inputname === '' || inputemail === '' || inputquestion === '' || inputmessage === ''){
           //alert("Todos los campos son obligatorios.");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Todos los campos del formulario son obligatorios.",
                confirmButtonColor: "#008f39",
                confirmButtonText: "Entendido"
            });
        } else if (!textRegex.test(inputname)) {
            //alert("Error en el campo de texto nombre, verifica que no hayas ingresado números.");
            Swal.fire({
                icon: "error",
                title: "Error en el campo Nombre",
                text: "Por favor, asegúrate de que el campo no contengan números.",
                confirmButtonColor: "#008f39",
                confirmButtonText: "Entendido"
            });
        } else if (!emailRegex.test(inputemail)) {
            //alert("Error en el campo email, introduce una dirección de correo valida.")
            Swal.fire({
                icon: "error",
                title: "Error en el correo electrónico",
                text: "Por favor, introduce una dirección de correo electrónico válida.",
                confirmButtonColor: "#008f39",
                confirmButtonText: "Entendido"
            });
        } else {
            //alert("Tu mensaje a sido enviado con éxito en breve te contactare.")
            Swal.fire({
                allowOutsideClick: false,
                icon: "success",
                title: "Gracias por contactarme",
                text: "Tu mensaje a sido enviado con éxito en breve te contactare.",
                confirmButton: true,
                confirmButtonText: "Entendido",
                allowOutsideClick: false,
                timer: 5000,
                timerProgressBar: true,
            });
            actionform.setAttribute('action', 'https://formsubmit.co/urrutiagonzalez.gustavon@gmail.com');
            actionform.submit();
        }     
        
       
    }
    
    const actionform = document.getElementById('Form');
    const buttonaction = document.getElementById('btnsendemail');

    
    buttonaction.addEventListener('click', function(event){
        event.preventDefault(); // Esto previene el comportamiento predeterminado de enviar el formulario
        sendemail();
    });
    

