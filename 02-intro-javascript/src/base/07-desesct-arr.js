const personajes = [ 'Goku', 'Vegetta', 'Thrunks' ];
const [ , , p3 ] = personajes;
// const retornaPersonajes = ( [ , , p3 ] ) => p3;
// const algoRandom = retornaPersonajes( personajes );
// console.log( algoRandom );
console.log( p3 );

const retornaArreglo = () => {
    return [ 'ABC', 123 ];
}
const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

// Tarea
// 1. el primer valor del arr se llamará nombre.
// 2. se llamará setNombre.
const state = ( valor ) => {
    return [ valor, () => { console.log( 'Hola Mundo' ) } ];
}
const arr = state( 'Goku' );
const [ nombre, setNombre ] = arr;
console.log( nombre );
setNombre();