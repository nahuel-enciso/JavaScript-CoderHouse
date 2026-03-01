const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const usuario = document.querySelector('#usuario').value
    const password = document.querySelector('#pass').value
    const email = document.querySelector('#email').value

    const users = JSON.parse(localStorage.getItem('users')) || []
    const register = users.find(user => user.email === email)

    if(register){
        return Swal.fire("El usuario ya esta registrado!");
       //return alert("El usuario ya esta registrado")//
    }

    users.push({user:usuario,password:password,email:email})
    localStorage.setItem('users', JSON.stringify(users))
    //Swal.fire("Registro existoso") lo mismo que en signup,la animacion no termina de cargar y pasa a la siguiente linea//
    alert('Registro exitoso')
    window.location.href = 'signup.html'
})