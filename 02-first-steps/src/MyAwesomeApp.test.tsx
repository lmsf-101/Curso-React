import { describe, test } from "vitest";

import { render } from '@testing-library/react';

import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp Component', () => {
    test('Render Component', () => {
        // DOM Virtual habilitado por Vitest
        console.log(document.body);
        const { container: con } = render(<MyAwesomeApp />);
        // HTML renderizado por el componente
        console.log(con.innerHTML);
    })
})