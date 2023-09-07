const formulario =document.querySelector("#form-inicio");
const inputUser=document.querySelector("#user")
const inputPass=document.querySelector("#pass")
const message=document.querySelector("#message")


const usuario = JSON.parse(localStorage.getItem("usuario"))

function validar(){
    if (((inputUser.value)==usuario.usuario) && ((inputPass.value)==usuario.contrasenia)){
    console.log("valido")
    alert("Bienvenido " + usuario.nombre +"!")
    
    location.href="pages/carrito.html";
}else{  
    alert("Usuario o contrasenia incorrecta\nVuelva a intertarlo \nSi no tiene una cuenta por favor registrese")
}
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
})