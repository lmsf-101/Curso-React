import { describe, expect, test } from "vitest";

import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp Component', () => {

    // Revisar si el render contiene un heading 1 de "Miguel"
    test('Should Render First and Last Name - Container', () => {
        // DOM Virtual habilitado por Vitest
        console.log(document.body);

        const { container: con } = render(<MyAwesomeApp />);
        // HTML renderizado por el componente
        // console.log(con.innerHTML);

        // Uso de screen para ver la renderización
        //screen.debug();

        // Validar si exsite h1 y h3 dentro del componente
        const h1 = con.querySelector("h1");
        const h3 = con.querySelector("h3");
        expect(h1?.innerHTML).toContain("Miguel");
        expect(h3?.innerHTML).toContain("Dante");
    })

    // Revisar lo mismo, pero ahora con Screen
    test('Should Render First and Last Name - Screen', () => {
        
        render(<MyAwesomeApp />);
        // Uso de screen para ver la renderización
        screen.debug();

        // Buscar si existe un h1 dentro del componente
        
        const h1 = screen.getByRole("heading", {
            level: 1
        })

        // Existe el screen.getByTestId para recuperar
        // elementos mediante data-testid, pero no es recomendable
        // const h1 = screen.getByTestId('first-name-title');

        expect(h1.innerHTML).toContain('Miguel');
    })
})