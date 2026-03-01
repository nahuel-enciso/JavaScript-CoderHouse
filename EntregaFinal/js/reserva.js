const formulario = document.querySelector('#formulario')
let obj = {}
const tbody = document.querySelector('tbody')


formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const turno = document.getElementById("seleccion").value
    let fecha = document.getElementById("dia").value


    obj = {
        id: Date.now(),
        id_mod: Date.now(),
        fecha: fecha,
        turno: turno
    }


    const nuevoTurno = document.createElement('tr')
    nuevoTurno.className = "th-" + obj.id

    nuevoTurno.innerHTML = `
                <td id="dia ${obj.id}">${obj.fecha}</td>
                <td id="especialista ${obj.id}">${obj.turno}</td>

                <td id="botones">
                    <button id="modificar-${obj.id}" class="modificar">&#9997</button>
                    <button id="delete-${obj.id}" class="eliminar">&#128078</button>
                </td>
                `
    tbody.appendChild(nuevoTurno)
    const boton = document.getElementById('delete-' + obj.id)

    boton.addEventListener("click", (e) => {
        const contenedor = boton.parentNode.parentNode
        contenedor.remove()
    })

    const modificar = document.getElementById("modificar-" + obj.id)
    modificar.addEventListener("click", (e) => {

        const aModificar = e.target.parentNode.parentNode

        const turnoModificar = document.getElementById("seleccion").value
        let fechaModificar = document.getElementById("dia").value
    
    
        objMod = {
            id: Date.now(),
            id_mod: Date.now(),
            fecha: fechaModificar,
            turno: turnoModificar
        }

        const turnoModificado = document.createElement('tr')
        turnoModificado.className = "th-" + obj.id

        turnoModificado.innerHTML = `
                <td id="dia ${objMod.id}">${objMod.fecha}</td>
                <td id="especialista ${objMod.id}">${objMod.turno}</td>

                <td id="botones">
                    <button id="modificar-${objMod.id}" class="modificar">&#9997</button>
                    <button id="delete-${objMod.id}" class="eliminar">&#128078</button>
                </td>
                `

                tbody.replaceChild(turnoModificado,aModificar)
       
        //tbody.replaceChild(turnoModificado,aModificar)//

        //turnoModificado.replaceWith(aModificar)//

        //turnoModificado.replaceWith(nuevoTurno)//
        //const reemplaza = tbody.replaceWith(turnoModificado,nuevoTurno)//
        //console.log(reemplaza)//
        //tbody.appendChild(reemplaza)//

        //const modificarFinal = document.querySelector(".th-" + obj.id)//
        //console.log(modificarFinal)//
        //modificarFinal.previousElementSibling.parentNode.remove()//
       
    })
   

})




/*compare por clases
const boton = document.getElementById(obj.id)
   
   console.log(boton)
if(boton.classList.contains(obj.id)===contenedor.classList.contains(obj.id)){
    contenedor.remove()
}
/*if(eliminar.classList.contains(index)===nuevo.classList.contains(index))
{
    nuevo.remove()
}*/
/*console.log(obj)*/


/*

*const agregar = document.querySelector('#agregar')
const tabla = document.querySelector('#tabla')

index = 1

agregar.addEventListener('click',(e)=>{
    e.preventDefault()

    const especialista = document.getElementById('seleccion').value
    const fecha = document.getElementById('dia').value

    tabla.innerHTML += `<tr id="nuevo${index}"> 
                       <td id="dia${index}">${fecha}</td>
                       <td id="especialista">${especialista}</td>
                       <td id="botones">
                       <button id="modificar${index}" class="estilo"><img class="modificar" src="images/edit.svg" alt=""></button>
                       <button id="eliminar${index}" class="estilo eliminar"><img class="eliminar" src="images/delete.svg" alt=""></button>
                       </td>
                       </tr>`

        
        
        const nuevo = document.getElementById('nuevo'+index)
        const eliminar = document.getElementById('nuevo'+index)

        eliminar.addEventListener('click',()=>{
            if(eliminar.classList.contains(index)===nuevo.classList.contains(index))
            {
                nuevo.remove()
            }
       
        })
        index++
})*/



