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

/*
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

let llamadapersonaje = llamadaApi("https://swapi.dev/api/people/2/");

llamadapersonaje
    .then(personaje => {
        console.log("Personaje nombre: " + personaje.name);
        //Aquí creamos la siguiente llamada ya que tenemos los datos del objeto y el campo a llamar de sus campos es una url.

        return llamadaApi(personaje.homeworld);

    })
    //Si queremos hacer un segundo .then tenemos que modificar el primer .then para que devuelva algo, sino la promesa que se crea devuelve nada
    .then(planeta => console.log("Planeta nacimiento: "+planeta.name))
    .catch(incorrecto => console.log("errorrrr "));

*/

/*
//Vamos a llamr pelis 
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

let llamadapersonaje = llamadaApi("https://swapi.dev/api/people/2/");

llamadapersonaje
    .then(personaje => {
        console.log("Personaje nombre: " + personaje.name);
        //Una vez que tenemos el persoaje, consultamos las pelis que contien un array.
        let arraydepromesas=personaje.films.map(peli=>llamadaApi(peli));
        return Promise.all(arraydepromesas);
        })
        //Aquí creamos la siguiente llamada ya que tenemos los datos del objeto y el campo a llamar de sus campos es una url.
    //Si queremos hacer un segundo .then tenemos que modificar el primer .then para que devuelva algo, sino la promesa que se crea devuelve nada
    .then(peli => console.log(peli))
    .catch(incorrecto => console.log(incorrecto));

    //Pasemos por pantalla de los pjs cuando pinchemos tiene que desplegarse las peliculas y a a derecha de la pelicula que
    //se despliegue el listado de planetas que salen en cada pelicula
    /*
    El orden tiene que ser:
    Personaje
    Peliculas: (Desplegable donde escoges la pelis)
        //Y a continuacion nos muestras los planetas que sales.
        Planeta1
        Planeta2
    */

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

let llamadapersonaje = llamadaApi("https://swapi.dev/api/people/2/");

llamadapersonaje
    .then(personaje => {
        let padre = document.getElementById("inicio");
        let pj = document.createElement("p");
        pj.textContent = personaje.name;
        padre.appendChild(pj);
        //Una vez que tenemos el persoaje, consultamos las pelis que contien un array.
        let arraydepromesas = personaje.films.map(peli => llamadaApi(peli));
        return Promise.all(arraydepromesas);
    })
    //Aquí creamos la siguiente llamada ya que tenemos los datos del objeto y el campo a llamar de sus campos es una url.
    //Si queremos hacer un segundo .then tenemos que modificar el primer .then para que devuelva algo, sino la promesa que se crea devuelve nada
    .then(peli => {
        let selector = document.createElement("select");
        selector.id="desplegable";
        let contenedor_padre = document.getElementById("inicio");
        peli.forEach(titulo => {
            let neo_option = document.createElement("option");
            neo_option.textContent = titulo.title;
            neo_option.value = titulo.planets;
            selector.appendChild(neo_option);
            console.log(neo_option.value);
        })
        contenedor_padre.appendChild(selector);




        selector.addEventListener("change", plant => {
            let peliescogida = document.getElementById("desplegable").value;
            
            console.log(peliescogida);
            //Aqui me he quedado
            let arraydeplanetas = peliescogida.map(planet => llamadaApi(planet));
            console.log(arraydeplanetas);
            Promise.all(arraydeplanetas)
            .then(planetos => {
                let neoplanet = document.createElement("div");
                let contenedor_padre = document.getElementById("inicio");
                planetos.forEach(titulo => {
                    let planeta = document.createElement("p");
                    planeta.textContent = titulo.name;
                    neoplanet.appendChild(planeta);
        
                })
                contenedor_padre.appendChild(neoplanet);       
            })
            .catch (incorrecto => console.log(incorrecto));
        })
    })

    
    
    .catch (incorrecto => console.log(incorrecto));


/*
fetch("https://apidireccion", opciones);
*/
