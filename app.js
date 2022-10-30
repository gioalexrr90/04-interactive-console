import colors from 'colors';
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import { Tareas } from './helpers/models/tareas.js';

console.clear();

//Se agrega el async ya que mostrarMenu() tiene una promesa y necesita retornar un valor
const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do {

        //Se almacena el valor de la promesa recibida de esta función en la variable opt
       opt = await inquirerMenu();

       //Se valida la variable opt y según la opción escojida se realizarn las siguientes opciones
       switch (opt) {
        case '1':
            //Se guarda en la variable desc el resultado de la función leerInput
            const desc = await leerInput('Descripcion:');
            //Se crea una tarea enviando el desc (descrición de la tarea) en la función creartarea
            tareas.crearTarea( desc );
        break;

        case '2':
            console.log(tareas._listado);
        break;
       }

       await pausa();

    } while (opt !== '0');
    

}

main();