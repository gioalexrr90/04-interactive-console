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

       switch (opt) {
        case '1':
            const desc = await leerInput('Descripcion:');
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