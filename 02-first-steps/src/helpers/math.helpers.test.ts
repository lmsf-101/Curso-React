// TEST SUITE 
// Debe tener al menos una prueba unitaria

import { expect, test } from 'vitest'
import { multiply } from './math.helpers'

//  test ('Descripción de prueba', () => {**PRUEBA A EJECUTAR**})

test( 'Multi de 3*5 es igual a 15', () => {

    console.log("Mi primera prueba!");

    // ARRANGE: Preparación de prueba
    const a = 3;
    const b = 5;

    // ACT : Aplicar estimulo (llamar función)
    const result = multiply(a, b);
    console.log(`Resultado : ${result}`)

    // ASSERT : Ver y evaluar resultados
    // Expect de Vitest <- Resultado esperado
    expect(result).toBe(15);
})