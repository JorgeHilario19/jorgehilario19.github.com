//DOM
//querySelector / querySelectorAll
//let tabla = document.querySelector("table");
/*
let links=document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
})*/

//1.- Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//2.- Recorrer los elementos
links.forEach(function(link){

//3.- Agregar un evento click a cada uno de ellos
  link.addEventListener("click",function(ev){
    ev.preventDefault();//Primer forma: Evita que el evento se ejecute
    let content = document.querySelector(".content");

    //QUitar clases de animación que ya tiene
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    //Agregar clases para annimar su salida fadeOutUp
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(function(){
      location.href= "/";
    },600);


    return false;//Segunda forma de evitar el evento

  });
});
