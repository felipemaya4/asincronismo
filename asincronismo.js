'use strict';

console.log("Hola Ubits")

setTimeout(()=>{// con setTimeout es una funcion que nos permite retrasar algunas acciones para que se puedan ejecutar otras,en este caso el mensaje en console event loop se retrasa 100ms y permite que la sentencia siguiente se ejecutada
    console.log("eventLoop");
},100);

console.log("estamos usando"); 