import colors from 'colors';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { inquirerMenu, pausa, leerInput, listadoBorrarTareas, confirmar, mostrarListadoChecklist } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';

console.clear();

//Se agrega el async ya que mostrarMenu() tiene una promesa y necesita retornar un valor
const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){
        tareas.cargarTareasFromArray( tareasDB );
    }
    
    do {

        //Se almacena el valor de la promesa recibida de esta función en la variable opt
       opt = await inquirerMenu();

       //Se valida la variable opt y según la opción escojida se realizarn las siguientes opciones
       switch (opt) {
        case '1': //Menu Crea tarea
            //Se guarda en la variable desc el resultado de la función leerInput
            const desc = await leerInput('Descripcion:');
            //Se crea una tarea enviando el desc (descrición de la tarea) en la función creartarea
            tareas.crearTarea( desc );
        break;

        case '2': //Menu Listar tareas
            tareas.listadoCompleto();
        break;

        case '3': //Menu Listar tareas completadas
            tareas.listarPendientesCompletadas(true)
        break;

        case '4': //Menu Listar tareas pendientes 
            tareas.listarPendientesCompletadas(false)
        break;

        case '5': //Completar tareas multiples
            const ids = await mostrarListadoChecklist(tareas.listadoArr);
            tareas.toggleCompletadas( ids );
        break;

        case '6': //Menu Listar tareas pendientes 
            const id = await listadoBorrarTareas(tareas.listadoArr);
            if ( id !== '0' ){
                const siBoorar = await confirmar('¿Estas seguro?');
                if ( siBoorar ){
                    tareas.borrarTarea(id);
                    console.log('Tarea borrada');
                }
            }
        break;

        case '0': //Menu Listar tareas pendientes 
            console.log('Salida del programa');
            return null;
        break;
       }

       guardarDB( tareas.listadoArr );

       await pausa();

    } while (opt !== '0');
    

}

main();