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

    //Vamos a llamar un temporizador con set.time.out cuando llegue a final de manera aleatoria decida si es 
    //resolver o rechazar

    ;

let p = new Promise(function (resolver, rechazar) {
    setTimeout(function biAleatorio() {
        j = Math.random(2);
        return j;
    }, 50000);

    if (j == 0) {

        resolver(respuesta);
    }
    else {
        rechazar();
    }
}

);

//En la variable personaje tenemos una promesa, que internamente ha hecho una llamada
//a una API con el objeto XMLHttpRequest

//Ahora podemos consumir la promesa
p
    .then(console.log("Correcto"))
    .catch(console.log("ful"));

