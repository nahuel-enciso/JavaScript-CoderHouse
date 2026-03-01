/*--------------------registro--------------------*/

const user = JSON.parse(localStorage.getItem('login_success')) || false

if(!user){
    window.location.href = 'html/signup.html'
}

/*--------------Titulo Bienvenido-------------------*/

const bienvenido = document.querySelector(".bienvenido")

bienvenido.innerHTML=`${user.user}`

/*--------------Icono salir-------------------*/

const userOut = document.querySelector('.userOut')

userOut.addEventListener('click',()=>{
    //Swal.fire("Hasta pronto") el mismo problema que en signup y register,la animaciion no termina y pasa a la siguiente linea,con alert comun no sucede//
    alert("Hasta pronto")
    localStorage.removeItem('login_success')
    window.location.href = 'html/signup.html'
})

/*--------------------seccion 1--------------------*/

const seccion1 = document.querySelector(".seccion1")
const imagenesSeccion1 = document.createElement("img")
imagenesSeccion1.classList.add("fotoSeccion1")
seccion1.appendChild(imagenesSeccion1)


const arraySeccion1 = ["1.jpg","2.jpg","3.jpg","4.jpg"]

const fotoSeccion1 = document.querySelector('.fotoSeccion1')
let indexImagenes1 = 0

const cambiarFoto = function () {
            fotoSeccion1.src=`images/slider/${arraySeccion1[indexImagenes1]}`
            if(indexImagenes1 < arraySeccion1.length-1){
                indexImagenes1++
            }else{
                indexImagenes1=0
            }
    }
cambiarFoto()    
setInterval(cambiarFoto,4000);


/*--------------------seccion 2--------------------*/




/*--------------------seccion 3--------------------*/

const seccion3 = [
    {
        imagen: "images/cards-seccion3/1.svg",
        titulo: "Guardia 24hs",
        detalle: "Clínica médica | Laboratorio | Radiología   Traumatología",
        url: "html/guardia"
    },
    {
        imagen: "images/cards-seccion3/2.svg",
        titulo: "Internación",
        detalle: "Somos una clínica con especalización quirúrgica",
        url: "html/internacion"
    },
    {
        imagen: "images/cards-seccion3/3.svg",
        titulo: "Consultorios externos",
        detalle: "Consultorios cerca de tu domicilio",
        url: "html/consultorios"
    },
    {
        imagen: "images/cards-seccion3/4.svg",
        titulo: "Diagnostico por imagen",
        detalle: "Equipos de última generación",
        url: "html/imagen"
    },
    {
        imagen: "images/cards-seccion3/5.svg",
        titulo: "Laboratorio acreditado",
        detalle: "Extracciones de lunes a sábados 7 a 12hs",
        url: "html/laboratorio"
    },
    {
        imagen: "images/cards-seccion3/6.svg",
        titulo: "Chequeos preventivos",
        detalle: "Diagnóstico a tiempo",
        url: "html/chequeo"
    }
]

const cards = document.querySelector('.cards')

function agregaCard3 () {
    seccion3.forEach(card=>{
        const div = document.createElement("div")
        div.classList.add("cardseccion3")
        div.innerHTML = `

        <img class="imgseccion3" src="${card.imagen}" alt="${card.titulo}">
        <h4>"${card.titulo}"</h4>
        <p class="pseccion3">"${card.detalle}"</p>
        <a href="${card.url}" class="btn btn-outline-info">Conoce más</a>
        `;

        cards.appendChild(div)
    })

}

agregaCard3()

const cardsActivas = document.querySelectorAll(".cardseccion3")

cardsActivas.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.classList.add("activoseccion3")
    })
    element.addEventListener("mouseout",()=>{
        element.classList.remove("activoseccion3")
    })     
});


/*-------------------Seccion 4-------------------*/




/*-------------------Seccion 5-------------------*/

const fotos = [
    {
        imagen: "images/cards-seccion5/1.jpg",
    },
    {
        imagen: "images/cards-seccion5/2.jpg",
    },
    {
        imagen: "images/cards-seccion5/3.jpg",
    },
    {
        imagen: "images/cards-seccion5/4.jpg",
    },
    {
        imagen: "images/cards-seccion5/5.jpg",
    },
    {
        imagen: "images/cards-seccion5/6.jpg",
    },
    {
        imagen: "images/cards-seccion5/7.jpg",
    },
    {
        imagen: "images/cards-seccion5/8.jpg",
    },
]

const fotos5 = document.querySelector('.seccion5')

    function agregarFotos(){
        fotos.forEach(foto => {

        const divFotos = document.createElement("div")
        divFotos.innerHTML=`
            <img class="divFotos" src="${foto.imagen}" alt="fotosSeccion5">
        `
        fotos5.appendChild(divFotos)
        
    });
}

agregarFotos()

const fotosActivas = document.querySelectorAll(".divFotos")

fotosActivas.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.classList.add("fotosActivas")
    })
    element.addEventListener("mouseout",()=>{
        element.classList.remove("fotosActivas")
    })     
});

/*-------------------Seccion 6-------------------*/

const array6 = [
    {
        imagen: "images/cards-seccion6/c.svg",
        titulo: "Carolina Fernandez",
        detalle: "Unos genios...la verdad yo estaba asustada porq no tenía buenas referencias, pero...",
    },
    {
        imagen: "images/cards-seccion6/f.svg",
        titulo: "Florencia Cuevas",
        detalle: "Buena clínica buena atención. Atienden por osba.guardia de adultos y ginecologica",
    },
    {
        imagen: "images/cards-seccion6/c.svg",
        titulo: "Mariela Muñoz",
        detalle: "La dra Otero la mejor",
    },
]

const cardsseccion6 = document.querySelector(".seccion6")

function agregarCard6 (){

    array6.forEach(card=>{
        const cards6 = document.createElement("div")
        cards6.classList.add("cardsseccion6")

        cards6.innerHTML=`
            <div class="tituloseccion6">
                <img class="letra" src="${card.imagen}">
                <h6 class="tituloseccion6">"${card.titulo}"</h6>
            </div>
            <div class="estrellas">
                <img class="estrella" src="images/cards-seccion6/star.svg" alt="estrella">
                <img class="estrella" src="images/cards-seccion6/star.svg" alt="estrella">
                <img class="estrella" src="images/cards-seccion6/star.svg" alt="estrella">
                <img class="estrella" src="images/cards-seccion6/star.svg" alt="estrella">
                <img class="estrella" src="images/cards-seccion6/star.svg" alt="estrella">
            </div>
            <div>
                <p class="pseccion6">"${card.detalle}"</p>
            </div>
            <div>
                <a class="aseccion6" href="#">Leer más</a>
            </div>
            `
            cardsseccion6.appendChild(cards6)
        })
    }
agregarCard6()

const comentarios = document.querySelectorAll(".cardsseccion6")

comentarios.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.classList.add("comentariosActivos")
    })
    element.addEventListener("mouseout",()=>{
        element.classList.remove("comentariosActivos")
    })     
});

/*-------------------Seccion 7-------------------*/

const seccion7 = document.querySelector(".seccion7")
const imagenesSeccion7 = document.createElement("img")
imagenesSeccion7.classList.add("fotoSeccion7")
seccion7.appendChild(imagenesSeccion7)


const arraySeccion7 = ["1.jpg","2.jpg","3.jpg","4.jpg"]

const fotoSeccion7 = document.querySelector('.fotoSeccion7')
let indexImagenes7 = 0

const cambiarFoto7 = function () {
            fotoSeccion7.src=`images/logos/${arraySeccion7[indexImagenes7]}`
            if(indexImagenes7< arraySeccion7.length-1){
                indexImagenes7++
            }else{
                indexImagenes7=0
            }
    }
cambiarFoto7()    
setInterval(cambiarFoto7,4000);

/*-------------------Seccion 8-------------------*/

const botonSeccion8 = document.querySelector(".botonseccion")
const parrafos = document.querySelector(".parrafos")

botonSeccion8.addEventListener("click",()=>{
    parrafos.classList.toggle("activoseccion8")
})

/*------------------Enfermera--------------------*/

const enfermera = document.querySelector(".float")

const apareceEnfermera = function () {
    enfermera.classList.remove("disableEnermera")
}

setInterval(apareceEnfermera,20000);