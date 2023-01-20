function saludando(nombre) {

    return new Promise((resolve, reject) => { // se crea una promesa, segun se eldato de ingreso se usa resolve para devolver la accion correcta
        if (typeof nombre === "string"){
            resolve("hola "+nombre+" estamos usando promesas");
        }
        else{
            reject("el valor debe ser de tipo string"); // reject si no es valida la operacion 
        }
    });
}
const nombre = 'felipe'
saludando(nombre)
.then(data => console.log(data)) // se recibe el dato que entrega la funcion que retorna la promesa
.catch(error => console.error(error))

