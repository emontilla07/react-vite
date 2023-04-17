import { CounterApp } from '../src/CounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas de  <CounterApp />', () => {
    const initValue = 100;

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <CounterApp counter={ initValue } /> );
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100 <CounterApp value={100} />', () => {
        render( <CounterApp value={ initValue } /> );
        expect( screen.getByText( initValue ) ).toBeTruthy();
    });

    test('debe de incrementar con el botón +1', () => {
        render( <CounterApp value={ initValue } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('101') ).toBeTruthy();
    });

    test('debe de decrementar con el botón -1', () => {
        render( <CounterApp value={ initValue } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('99') ).toBeTruthy();
    });

    test('debe de funcionar el botón de rest', () => {
        render( <CounterApp value={ initValue } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );
        expect( screen.getByText( initValue ) ).toBeTruthy();
    });
});