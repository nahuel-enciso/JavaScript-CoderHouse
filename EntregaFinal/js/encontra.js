const formulario = document.querySelector("#formulario")
const cards = document.querySelector(".card1")

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()

    const seleccion = document.querySelector("#seleccion").value
    
    cards.innerHTML=""

    fetch("../json/medicos.json")
        .then((response)=> response.json())
        .then((data)=>{
            const resultado = data.filter(medico => medico.Especialidad === seleccion)
            
            resultado.forEach(element => {
                const divMedicos = document.createElement("div")
                divMedicos.classList.add("card-seccion3")
                divMedicos.innerHTML= `
                    <img class="imgseccion3" src="${element.Imagen}" alt="medico">
                    <h4>${element.Nombre}</h4>
                    <p class="pseccion3">${element.Horario}</p>
                    <button type="button" class="btn btn-danger">Info</button>
                    `;
                    cards.appendChild(divMedicos)
            });
            
        })
        .catch((error) => console.log(error))
    

})
