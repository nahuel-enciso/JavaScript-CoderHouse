const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const usuario = document.querySelector('#usuario').value
    const password = document.querySelector('#password').value

    const users = JSON.parse(localStorage.getItem('users')) || []

    const valido = users.find(user => user.user === usuario && user.password === password)
    

    if(!valido){
        return Swal.fire("Usuario y/o contraseña incorrectos");//
        //return alert('usuario y/o constraseña incorrectos')//
    }
    //Swal.fire(`bienvenido ${valido.user}`); no da tiempo a la animacion y continua,dentro del else,muestra,pero no continua//
    alert(`bienvenido ${valido.user}`)//
    localStorage.setItem('login_success',JSON.stringify(valido))
    window.location.href = '../index.html'
})