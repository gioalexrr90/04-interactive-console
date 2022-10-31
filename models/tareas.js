import { Tarea } from './tarea.js'
import colors from 'colors'

class Tareas {

    _listado = {};

    //Obtener listado de los eventos creados
    get listadoArr(){
        const listado = [];

        //Permite extraer cada llave dellistad _listado comounarreglo
        Object.keys(this._listado).forEach( key => {
            //Se realiza una busqueda del contenido _listado mediante el key
            const tarea = this._listado[key];
            //se agrega en la variable listado el resultado de tarea
            listado.push(tarea);
        });

        return listado;
    }

    constructor () {
        this._listado = {};
    }

    crearTarea(desc = '' ){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray( tareas = [] ){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    listadoCompleto(){
        this.listadoArr.forEach( ( tarea, id ) => {
            //Como yo lo resolvi
            // if (tarea.completadoEn){
            //     console.log(`${ id + 1 }. ${ tarea.desc } :: ${ 'Completado'.green }`);
            // } else {
            //     console.log(`${ id + 1 }. ${ tarea.desc } :: ${ 'Pendiente'.red }`);
            // }

            //Como viente en el curso
            const idx = `${ id +  1 }`;
            const { desc, completadoEn} = tarea;
            const estado = (completadoEn)
                            ? 'Completada'.green
                            : 'Pendiente'.red;
            console.log(`${idx}. ${desc} :: ${estado}`);
        })
    }

    listarPendientesCompletadas( completada = true ){
        let contador = 0;
        this.listadoArr.forEach( (tarea, id) => {
            const { desc, completadoEn} = tarea;
            const estado = ( completadoEn )
                            ? 'Completada'.green
                            : 'Pendiente'.red;
            if(completada){
                if(completadoEn){
                    contador += 1;
                    console.log(`${contador.toString().cyan}. ${desc} :: ${estado}`);
                }
            } else if(!completadoEn) {
                contador += 1;
                console.log(`${contador.toString().cyan}. ${desc} :: ${estado}`);
            }
        })
    }
}

export { Tareas };