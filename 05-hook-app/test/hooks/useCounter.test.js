import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => {
    const value = 100;

    test('Debe retornar los valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe( 0 );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('Debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook( () => useCounter( value ) );
        const { counter } = result.current;

        expect( counter ).toBe( 100 );
    });

    test('Debe de incrementar el contador', () => {
        const { result } = renderHook( () => useCounter( value ) );
        const { increment } = result.current;

        act(() => {
            increment();
            increment( 2 );
        });

        expect( result.current.counter ).toBe( 103 );
    });

    test('Debe de decrementar el contador', () => {
        const { result } = renderHook( () => useCounter( value ) );
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement( 2 );
        });

        expect( result.current.counter ).toBe( 97 );
    });

    test('Debe de realizar el reset', () => {
        const { result } = renderHook( () => useCounter( value ) );
        const { decrement, reset } = result.current;

        act(() => {
            decrement();
            reset();
        });
        
        expect( result.current.counter ).toBe( 100 );
    });
});