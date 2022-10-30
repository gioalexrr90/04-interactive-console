const colors = require('colors');

const mostrarMenu = () => {

    //Se crea promesa para retornar la opción del usuario (del 1 a 0) y este sea enviada en la variable opt del resolve de la promesa
    return new Promise( (resolve) => {
        console.clear();
        console.log('========================='.white);
        console.log('  Seleccione una opción'.white);
        console.log('=========================\n'.white);

        console.log(`${ '1.'.white } Crear tarea`);
        console.log(`${ '2.'.white } Listar tareas`);
        console.log(`${ '3.'.white } Listar tareas completadas`);
        console.log(`${ '4.'.white } Listar tareas pendientes`);
        console.log(`${ '5.'.white } Completar tarea(s)`);
        console.log(`${ '6.'.white } Borrar tarea`);
        console.log(`${ '0.'.white } Salir del programa\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Selecione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });
    
}

const pausa = () => {

    return new Promise( (resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${ 'ENTER'.yellow } para continuar\n`, (opt) => {
            readline.close();
            resolve();
        });
    })
    
}

module.exports = {
    mostrarMenu,
    pausa
}