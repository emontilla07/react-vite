const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

// const retornaPersona = ( usuario ) => {
//     console.log( usuario );
// }

// const retornaPersona = ( usuario ) => {
//     const { edad, clave, nombre } = usuario;
//     console.log( edad, clave, nombre );
// }

// const retornaPersona = ( { clave, nombre, edad, rango='Capitán' } ) => {
//     // console.log( nombre, edad, rango );
//     return {
//         nombreClave: clave,
//         anios: edad,
//     };
// }

// const avenger = retornaPersona( persona );

const context = ({ clave, nombre, edad, rango='Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232,
        },
    };
}

const { nombreClave, anios, latlng: { lat, lng } } = context( persona );

console.log( nombreClave, anios, lat, lng );
// console.log( latlng );