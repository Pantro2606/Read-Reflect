// arreglo que contiene las respuestas correctas
let correctas = [1,3,3,1,2];

// arreglo donde se guardan las respuestas del usuario
let opcion_elegida =[];

let cantidad_correctas =0;

// función que toma el num de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta,seleccionada){
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //el siguiente codigo es para poner en color blanco 
    // el fondo de los inputs para cuando elige otra opción
    // armo el id para seleccionar el section correspondiente
    id="p" + num_pregunta;

    lebels = document.getElementById(id).childNodes
    lebels[3].style.backgroundColor = "white";
    lebels[5].style.backgroundColor = "white";
    lebels[7].style.backgroundColor = "white";

    // doy el color a label seleccionado
    seleccionada.parentNode.style.backgroundColor = "#cec0fc"
}
// funcion que compara los arreglos para saber cuantas estuvieron correctas 
function corregir(){
    cantidad_correctas = 0;
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas
}