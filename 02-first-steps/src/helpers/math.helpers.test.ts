// TEST SUITE 
// Debe tener al menos una prueba unitaria

import { describe, expect, test } from 'vitest'
import { add, multiply, subtract } from './math.helpers'

//  test ('Descripción de prueba', () => {**PRUEBA A EJECUTAR**})

describe('Pruebas Add', () => {
    test( '2 + 2 = 4', () => {    
        // ARRANGE: Preparación de prueba
        const a = 2;
        const b = 2;
    
        // ACT : Aplicar estimulo (llamar función)
        const result = add(a, b);
    
        // ASSERT : Ver y evaluar resultados
        // Expect de Vitest <- Resultado esperado
        expect(result).toBe(4);
    })

    test( '-4 + -2 = -6', () => {    
        // ARRANGE: Preparación de prueba
        const a = -4;
        const b = -2;
    
        // ACT : Aplicar estimulo (llamar función)
        const result = add(a, b);
    
        // ASSERT : Ver y evaluar resultados
        // Expect de Vitest <- Resultado esperado
        expect(result).toBe(-6);
    })
    
})

// Describe -> Forma de agrugar y organizar pruebas similares
describe('Pruebas Subtract', () => {

    test('-5 - 2 = -7', () => {
        
        const a = -5;
        const b = 2;
    
        const result = subtract(a, b);
    
        expect(result).toBe(-7);
    
    })

    test('4 - 100 = -96', () => {
        
        const a = 4;
        const b = 100;
    
        const result = subtract(a, b);
    
        expect(result).toBe(-96);
    
    })
})

describe('Pruebas Multiply', () => {

    test('8 * 5 = 40', () => {
        
        const a = 8;
        const b = 5;
    
        const result = multiply(a, b);
    
        expect(result).toBe(a * b);
    
    })

    test('9 * 12 = 108', () => {
        
        const a = 9;
        const b = 12;
    
        const result = multiply(a, b);
    
        expect(result).toBe(108);
    
    })
})


