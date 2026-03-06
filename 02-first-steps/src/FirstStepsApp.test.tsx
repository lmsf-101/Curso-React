import { render } from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';


describe("FirstStepsApp", () => {

  // Generar y verificar snapshot del componente y su estructura
  test("Should Match Snapshot", () => {

    const { container:con } = render(<FirstStepsApp />);

    expect(con).toMatchSnapshot();

  })

})