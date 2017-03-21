function agregar_a_li(){
  var inputLi = document.getElementById("nuevoLi").value;
    var li = document.createElement("li");
    li.innerHTML = inputLi;
    document.getElementById("print_InputLi").appendChild(li);
};
