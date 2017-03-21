// var frutas = [];
//
// function obtenerListaFrutas(){
//   return frutas;
// }
//
// function agregarFruta(){
//
//   var ingresaFruta = new Object();
//   ingresaFruta.nuevaFruta = document.getElementById("nuevoLi").value;
//   frutas.push(agregarFruta)
//
//   return agregarFruta;
// }
//
// function mostrar(fruta){
//   var resultado = "";
//   resultado += fruta.nuevaFruta;
//
//   return resultado;
// }
//
// function mostrarListadeFrutas(frutas){
//   var lista = "";
//   for( var i = 0; i < frutas.length; i++){
//     lista += mostrar(frutas[i]);
//   }
//
//   return lista;
// }
//
// // +function (){
// //
// //   var botonMostrar = document.getElementById("mostrar");
// //   var resultado = document.getElementById("print_InputLi")
// //
// //   var eventoMostrar = function(e){
// //     e.preventDefault();
// //     var frutas = obtenerListaFrutas();
// //     botonMostrar.innerHTML = mostrarListadeFrutas(frutas)
// //   };
// //
// //   botonMostrar.addEventListener("click", eventoMostrar);
// //
// // }();


function agregar_a_li(){
  var inputLi = document.getElementById("nuevoLi").value;
  // for(var i = 0; i < inputLi.length; i++){
    var li = document.createElement(li);
    li.id = inputLi;
    li.innerHTML = inputLi;
    document.getElementById("print_InputLi").appendChild(li);
  // }
};
