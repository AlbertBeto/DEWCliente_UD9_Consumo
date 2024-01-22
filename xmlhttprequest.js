'use strict'

let conec = new XMLHttpRequest(); //Creamos el objeto

let datos; //Variable donde tendremos los datos

conec.addEventListener("load", function(){
    //Función de callback que se ejecutará cuando se carguen los datos
    if (conec.status >= 200 && conec.status < 400){
    datos= this.response; //En el objeto response tenemos la respuesta
    //Aquí sí tenemos los datos disponibles
    //console.log("Los datos recibidos son: "+datos);
    let respuesta = JSON.parse(datos)
    let oscuro = false
    respuesta.results.forEach(element=> crearPersonaje(element,oscuro=!oscuro))
    }
    else {
    console.log("error "+conec.status+":"+conec.statusText);
    }
});

function crearPersonaje(personaje,oscuro){
    let nuevoDiv = document.createElement("div");
    let color = oscuro?"grey":"white";
    nuevoDiv.style.background=color;
    nuevoDiv.textContent="Nombre: "+personaje["name"];
    nuevoDiv.textContent+=" - Altura: "+personaje["height"];
    nuevoDiv.textContent+=" - Sexo: "+personaje["gender"];
    document.getElementById("inicio").appendChild(nuevoDiv);
}

//URL a la que hacemos la petición de datos
conec.open("GET","https://swapi.dev/api/people/",true);
//Hace la petición propiamente dicha
conec.send();
//Si hacemos esto aquí, el resultado será UNDEFINED, porque aún no tenemos
//la respuesta del servidor.
console.log("Voy después de la llamada, y los datos recibidos son: "+datos);


