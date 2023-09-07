const inputNombre =document.querySelector("#nombre");
const inputApellido =document.querySelector("#apellido");
const inputEmail =document.querySelector("#email");
const inputEdad =document.querySelector("#edad");
const formulario =document.querySelector("#form-registro");
const inputUser=document.querySelector("#user")
const inputPass=document.querySelector("#pass")
const message=document.querySelector("#message")
console.log(inputNombre.value)





function registrarUser(){
    const usuario = {nombre:inputNombre.value, apellido : inputApellido.value , email : inputEmail.value , edad : inputEdad.value, usuario : inputUser.value , contrasenia : inputPass.value}
    localStorage.setItem("usuario",JSON.stringify(usuario))
   
}
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    registrarUser()
    console.log(inputPass.value)
    alert("registro exitoso")
    location.href="../index.html";
})

