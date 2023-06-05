import { render } from '@testing-library/react';
import { GifExpertApp } from '../../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('Debe retornar una nueva categoría', () => {
        render( <GifExpertApp /> );
    });
});