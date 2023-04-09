// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';    usando un snippet imp vscode nos genera la estructura para la importación

// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// import { heroes } from './data/heroes';

// console.log( owners );

export const getHeroById = ( id ) => heroes.find( ( heroe ) => heroe.id === id );    
// método find sirve para encontrar una coincidencia.

// console.log( getHeroById( 3 ) );

export const getHeroByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );
// método filter sirve para traer todas las coincidencias

// console.log( getHeroByOwner( 'DC' ) );