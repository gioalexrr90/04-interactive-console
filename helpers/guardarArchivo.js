import fs from 'fs';

const archivo = './db/data.json';

const guardarDB = ( data ) =>  {
    //La información es combertida en scring con JSON.sringify
    fs.writeFileSync( archivo, JSON.stringify( data ) );
}

const leerDB = () => {
    if( !fs.existsSync(archivo) ){
        return  null;
    }
    const info = fs.readFileSync( archivo, { encoding: 'utf-8' });
    //La información es comvertida a formato JSON con JSON.parse
    const data = JSON.parse(info);
    // console.log(data);
    return data;
}

export { guardarDB, leerDB };