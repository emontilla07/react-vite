import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba en 06-deses-obj', () => {
    test('usContext debe regresar un objeto', () => {
        const clave = 'ABC123';
        const edad = 40;
        const user = usContext({clave, edad});
        expect(user).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});