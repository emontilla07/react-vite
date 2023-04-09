import { getHeroById } from "./base/08-imp-exp";

// const promesa = new Promise( ( resolve, reject ) => {
//     setTimeout( () => {
//         const heroe = getHeroById( 3 );
//         // resolve( heroe );
//         reject( 'No se pudo encontrar el heroe' );
//         // console.log( heroe );
//     }, 2000 )
// } );

// promesa.then( ( heroe ) => {
//     console.log( heroe );
// } )
// .catch( ( err ) => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            const heroe = getHeroById( id );
            ( heroe !== undefined ) ? resolve( heroe ) : reject( 'No se pudo encontrar el heroe' );
        }, 2000 )
    } );
}

getHeroeByIdAsync( 3 )
    .then( console.log )
    // .then( ( { name } ) => console.log( 'Nombre: ', name ) )
    .catch( console.warn );