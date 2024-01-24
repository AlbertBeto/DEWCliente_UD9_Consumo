'use strict'

/*
//Función que hace una llamada a una API y devuelve una promesa
function llamadaApi(url) {
                        //LA primera funcion es para el .then y la segunda para el .catch
    return new Promise((resolver, rechazar) => {
        let req = new XMLHttpRequest();
        req.onload = function () {
            if (req.status >= 200 && req.status < 400) {
                let respuesta = JSON.parse(this.response);
                resolver(respuesta);
            }
            else {
                rechazar("error " + req.status + ":" + req.statusText);
            }
        }
        req.open("GET", url, true);
        req.send();
    });
}
 
//En la variable personaje tenemos una promesa, que internamente ha hecho una llamada
//a una API con el objeto XMLHttpRequest
let personaje = llamadaApi("https://swapi.dev/api/people/1/");
//Ahora podemos consumir la promesa
personaje
    .then(dato => console.log(dato.name))
    .catch(error => console.log(error));
 
console.log("Después de la promesa");
*/

/*
//Vamos a llamar un temporizador con set.time.out cuando llegue a final de manera aleatoria decida si es 
//resolver o rechazar

let pro = new Promise(function (resolver, rechazar) {

    let cool = setTimeout(function biAleatorio() {
        let j = Math.floor(Math.random() * 2);
        console.log(j);
        if (j == 0) {

            return resolver();
        }
        else {
            return rechazar();
        }
        ;
    }, 2500);
}
);

//En la variable personaje tenemos una promesa, que internamente ha hecho una llamada
//a una API con el objeto XMLHttpRequest

//Ahora podemos consumir la promesa
pro
    .then(correcto => console.log("Correcto "))
    //Si queremos hacer un segundo .then tenemos que modificar el primer .then para que devuelva algo, sino la promesa que se crea devuelve nada
    .then(correcto => console.log("Then2 "))
    .catch(incorrecto => console.log("ful "));

    */

//PReguntar por un personaje concreto, cunado llegue lo imprimios y luego consultamos nuevamente que pelicualas ha participado y cuando llegue lo imprimimos. 


function llamadaApi(url) {
    //LA primera funcion es para el .then y la segunda para el .catch
    return new Promise((resolver, rechazar) => {
        let req = new XMLHttpRequest();
        req.onload = function () {
            if (req.status >= 200 && req.status < 400) {
                let respuesta = JSON.parse(this.response);
                resolver(respuesta);
            }
            else {
                rechazar("error " + req.status + ":" + req.statusText);
            }
        }
        req.open("GET", url, true);
        req.send();
    });
}

let llamadapersonaje = llamadaApi("https://swapi.dev/api/people/8/");

llamadapersonaje
    .then(personaje => {
        console.log("Personaje nombre: " + personaje.name);
        //Aquí creamos la siguiente llamada ya que tenemos los datos del objeto y el campo a llamar de sus campos es una url.

        return llamadaApi(personaje.homeworld);

    })
    //Si queremos hacer un segundo .then tenemos que modificar el primer .then para que devuelva algo, sino la promesa que se crea devuelve nada
    .then(planeta => console.log("Planeta nacimiento: "+planeta.name))

       
    .catch(incorrecto => console.log("errorrrr "));

