

let codigo;

let rubro;
let codigoInterno;
let nombreProducto;
let precio;
let stock;
let prod;
let imagen;
let total = 0;


const rubros = ["Todos", "Caramelos", "Chocolates", "Electronica", "Gallettas", "Lacteos", "Merceria", "Regaleria", "Snacks"];

class Producto {
    constructor(codigo, rubro, codigoInterno, nombreProducto, stock, precio, imagen) {
        this.codigo = codigo;
        this.rubro = rubro;
        this.codigoInterno = codigoInterno;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const productos = [];

productos.push(new Producto(1, 2, 1, "Sugus", 10, 10, "sugus.jpeg"));
productos.push(new Producto(2, 2, 2, "Palito de la selva", 10, 12,"palitos-de-la-selva.jpeg"));
productos.push(new Producto(3, 2, 3, "Billiken", 10, 56,"billiken.jpeg"));
productos.push(new Producto(4, 3, 1, "Block", 10, 78,"block.jpg"));
productos.push(new Producto(5, 3, 2, "Milka", 10, 29,"milka.jpg"));
productos.push(new Producto(6, 3, 3, "Toke", 10, 66,"toke.jpeg"));
productos.push(new Producto(7, 4, 1, "Cargador", 10, 88,"cargador.jpg"));
productos.push(new Producto(8, 4, 2, "Cable Usb", 10, 96,"cable-usb.jpeg"));
productos.push(new Producto(9, 4, 3, "Memoria Micro SD 32gb", 10, 58,"memoria.jpg"));
productos.push(new Producto(10, 5, 1, "Divercion", 10, 96, "divercion.jpg"));
productos.push(new Producto(11, 5, 2, "Oreo", 10, 88,"oreo.jpg"));
productos.push(new Producto(12, 5, 3, "Don Satur", 10, 13,"don-satur.jpg"));
productos.push(new Producto(13, 6, 1, "Leche entera", 10, 15,"leche-entera.jpg"));
productos.push(new Producto(14, 6, 2, "Leche descremada", 10, 79,"leche-descremada.jpg"));
productos.push(new Producto(15, 6, 3, "Yogurt Ls Fut", 10, 85,"yogur-ls-frutilla.jpg"));
productos.push(new Producto(16, 7, 1, "Agujas Canastita", 10, 63,"agujas-canastita.jpg"));
productos.push(new Producto(17, 7, 2, "Elastico 2mts", 10, 49,"elastico.jpg"));
productos.push(new Producto(18, 7, 3, "Hilo de coser", 10, 78,"hilo-coser.jpg"));
productos.push(new Producto(19, 8, 1, "Caja de bombones", 10, 63,"caja-de-bombones.jpg"));
productos.push(new Producto(20, 8, 2, "Perfume mujercitas", 10, 73,"perfume-mujercitas.jpg"));
productos.push(new Producto(21, 8, 3, "Vino + Caja", 10, 15,"vino-caja.jpg"));
productos.push(new Producto(22, 9, 1, "Doritos", 10, 91,"doritos.jpg"));
productos.push(new Producto(23, 9, 2, "Lay's", 10, 85,"lays.jpg"));
productos.push(new Producto(24, 9, 3, "Chettos", 10, 35,"cheetos.jpg"));

const carrito=structuredClone(productos);
//console.log("2 "+productos[0].stock)
//let filtro, alerta, alerta2;
for (i=0; i < carrito.length; i++){
    carrito[i].stock=0;
}

/* function Largo(arr, alerta) {//Para comparar si la opcion igresada esta en el rago del tamaño de array()
    let larg = arr.length
    if ((alerta > larg) || (alerta < 1)) {
        return false;
    } else {
        return true;
    }
}

function MostarRubros(rubros) {// Para concatenar los rubros e imprimirlos en pantalla
    alerta = "Ingrese el rubro : ";
    rubros.forEach(el => {
        alerta = alerta + "\n" + (rubros.indexOf(el) + 1) + " - " + el;
    }
    );
    alerta = alerta + "\nFinalizar - Ingrese cualquier caracter que no este en la lista"
}
function MostrarProductos(productos, filtro) {// Para concatenar los productos(segun seleccion de Rubro: TODOS o Un rubro especifico) e imprimirlos en pantalla
    alerta2 = "Selecione los productos que quiere agregar al carrito : "
    if (filtro == 1) {//Todos los rubros
        for (let i = 0; i < productos.length; i++) {

            alerta2 = alerta2 + "\n" + productos[i].codigo + " - " + productos[i].nombreProducto;
        }
    } else {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].rubro == filtro) {//Rubro especfico
                alerta2 = alerta2 + "\n" + productos[i].codigoInterno + " - " + productos[i].nombreProducto;
            }
        }
    }
}

function Carrito() {// para almacenar los productos seleccionados. Se almacena en el arra vacio "carrito"
    MostarRubros(rubros)
    filtro = prompt(alerta);
    while (Largo(rubros, filtro)) {//mientras se verifique  que seleccion esta dentro del rango de rubros
        MostrarProductos(productos, filtro);
        let selec = true;// *1 selec asegura no guardar un "undefined" en carrito al ingresar una opcion invalida
        selecion = prompt(alerta2);
        if (filtro == 1) {
            
            if (Largo(productos, selecion)&&(Existencia(productos,selecion-1))) {
                prod = selecion;
                productos[selecion-1].stock = (productos[selecion-1].stock)-1;
                console.log(productos[selecion-1].stock+" "+productos[selecion-1].nombreProducto)
            } else if (!(Existencia(productos,selecion-1))){
                alert("No hay stock del producto selecionado");
                selec = false;//*1
            }else{
                alert("Opcion invalida ")
                selec = false;//*1
            }
        } else {
            
            if ((selecion == 1) || (selecion == 2) || (selecion == 3)) {
                for (let i = 0; i < productos.length; i++) {
                    if (((productos[i].rubro == filtro) && (productos[i].codigoInterno == selecion))&&(Existencia(productos,selecion-1))) {
                        prod = productos[i].codigo;
                        productos[i].stock =(productos[i].stock)-1;
                        console.log(productos[i].stock+" "+productos[i].nombreProducto)

                    }
                }
            } else {
                alert("Opcion invalida ")
                selec = false;// *1
            }
        }
        if (selec) {//*1
            carrito.push(productos[prod - 1]);
            console.log("seleccion : " + selecion);
        }
        filtro = prompt(alerta);
    }
}


function MostrarCompra(arr) {
    Carrito()
    let listaCompra = "Su Carrito : \n";
    arr.forEach(pro => {
        total = (pro.precio) + total;
        console.log(total)
        listaCompra = listaCompra + pro.nombreProducto + "  $ " + pro.precio + "\n";
        console.log(total)
    });
    if (total == 0) {
        return listaCompra = "Su carrito esta vacio"
    } else {
        return listaCompra + "Total :  $ " + total;
    }
}

function Existencia(productos,prod){
    if ((productos[prod].stock) < 1 ){
       
    return false
}else{
    return true
}
}

alert(MostrarCompra(carrito));

productos.forEach(producto =>console.log(producto))
 */
const contenedorLista=document.querySelector("#contenedorLista");
const btnBuscar=document.querySelector("#btnBuscar");
const produc=document.querySelector("#produc");
const contenedor = document.querySelector("#contenedor");
const fin = document.querySelector("#fin");
const btnFin= document.querySelector("#btnFin");
const contenedorUsuario =document.querySelector("#contenedorUser")
const btnCerrar= document.querySelector("#btnCerrar");
const contenedorUser= document.querySelector("#contenedorUser");
function crearLista(arr) {
    contenedorLista.innerHTML = "";   
    let html;
    for ( let i = 0 ; i < arr.length ; i++) {
        html= `<option id="contenedorLista" value="${i+1}">${arr[i]}</option>`
        contenedorLista.innerHTML += html;
        console.log("contenedor : " +html   )

    }
    console.log(html)
}

crearLista(rubros);



function filtroRubro(valor){
    contenedorLista.addEventListener("change", (e) => {
       valor = document.querySelector("#contenedorLista").value;
});

    }
    function buscarFiltrado(productos,valor,seleccion){
        console.log("valor al hacer click en buscar: " + valor)
    if (valor == "1"){
        for (let i=0; i< productos.length ;i++){
            seleccion.push(productos[i]);
        }
        
    }else{
    
    for (let i = 0 ; i < productos.length; i++){
        if (productos[i].rubro == valor){
            seleccion.push(productos[i]);
        }
    }
    
    }
    }



    
    
function filtrarServicio(arr, filtro) {
    const filtrado = arr.filter((el) => {
      return el.nombreProducto.toLowerCase().includes(filtro.toLowerCase());
    });
  return filtrado;
  }


  function crearHtml(arr,conten,fin) {
    conten.innerHTML = "";
    fin.innerHTML="";
    let html;
    for (const el of arr) {
      html = `<div class="cuadro">
                  <img src="../img/${el.imagen}" alt="${el.nombreProducto}">
                  <hr>
                  <h3>${el.nombreProducto}</h3>
                  <p>Precio: $${el.precio} </p>
                  <div id="contador" class="contador">
                  <input id="${el.codigo}" class="cant" type="number" min="0" max="${el.stock}" pattern="^[0-9]" value="0"></input>
                  </div>
                </div>`;
                conten.innerHTML += html;
    }
  }
  function crearHtmlChango(arr,conten) {
    conten.innerHTML = "";
    let html;
    let htmlfin;
    let total=0;
    for (const el of arr) {
        let total_parcial=(el.precio)*(el.stock)
         total=total+total_parcial;
      html = `<div class="cuadro">
                  <img src="../img/${el.imagen}" alt="${el.nombreProducto}">
                  <hr>
                  <h3>${el.nombreProducto}</h3>
                  <p>Cantidad: ${el.stock} </p>
                  <p>SubTotal: $${total_parcial}</p>
                </div>`;
                conten.innerHTML += html;
    }
    htmlfin= `<div class="finalizar">
    <hr>
    <h1>El total de su compra es</h1>
    <h1>$${total}</h1>
  </div>`;
    conten.innerHTML=conten.innerHTML+htmlfin
  }

btnBuscar.addEventListener("click", (e) => {
   let valor = document.querySelector("#contenedorLista").value;
    filtroRubro(valor);
    console.log("valor al hacer click : " + valor) 
    let seleccion=[]
    buscarFiltrado(productos,valor,seleccion)
    const valorBuscado=document.getElementById("produc").value
    console.log(valorBuscado)
    const filtrado=filtrarServicio(seleccion, valorBuscado);
    crearHtml(filtrado,contenedor,fin);
    cargarChango()
})

function cargarChango(){
const cambios = document.querySelectorAll(".cant")
cambios.forEach(el =>{
    el.addEventListener("change", function(e){
        console.log([e.target.id])
        console.log("el stock en producto es : "+productos[(e.target.id)-1].stock)
        console.log("ha cambiado "+ e.target.id +" valor :" +e.target.value)
        if (productos[(e.target.id)-1].stoc<1){
           (e.target.value < 1)
            alert("Valor no valido")
        }else
        carrito[(e.target.id)-1].stock=e.target.value   
        console.log(carrito)
        }
        )
})
}

function mortarChango(){
const chango=[]
console.log(chango.length) 
btnFin.addEventListener("click", (e) => {
    for (let i = 0 ; i< carrito.length; i++){
        if (carrito[i].stock!=0){
        chango.push(carrito[i])
        }
    }
    if (chango.length==0){
        contenedor.innerHTML =
       `<div><hr>
        <h1>Su Carrito esta vacio</h1>
        </div>`
    }else{
    const cambios = document.querySelectorAll(".cant")
    contenedor.innerHTML = "";
    crearHtmlChango(chango,fin);
}
    console.log(chango)
    
    
})
}
function mostrarUsuario(){
  
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    console.log(usuario)
    let     html= `<div>
    <hr>
    <h2>Usuario : ${usuario.nombre} ${usuario.apellido} fff</h2>
  </div>`;

}

function cerrarSecion(){
    btnCerrar.addEventListener("click",()=>{
        location.href="../index.html";
    })
}
mostrarUsuario()
mortarChango()

cerrarSecion()