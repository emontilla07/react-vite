import { useState } from 'react';

export const useCounter = ( initialValue = 0 ) => {
    const [ counter, setCounter ] = useState( initialValue );

    // Formas de exponer el setCounter desde un custom hook
    // Para incrementar o decrementar se pasa un parametro con valor a las funciones
    const increment = ( value = 1 ) => {
        setCounter( current => current + value );
    }

    const decrement = ( value = 1 ) => {
        if ( counter === 0 ) return;
        setCounter( current => current - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    };
}