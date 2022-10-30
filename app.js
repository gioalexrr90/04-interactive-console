const colors = require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

//Se agrega el async ya que mostrarMenu() tiene una promesa y necesita retornar un valor
const main = async() => {

    let opt = '';

    do {

        //Se almacena el valor de la promesa recibida de esta función en la variable opt
       opt = await mostrarMenu();
       console.log({opt});

       //Se valida no hay respuesta en la promesa programada en la función mostrarMenu(), entonces se genera una pausa
       if(opt !== '0') await pausa();

    } while (opt !== '0');
    

}

main();