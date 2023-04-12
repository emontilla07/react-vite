import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-templeta-string', () => {
    test('getSaludo debe retornar "Hola Eric"', () => {
        const name = 'Eric';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });
});