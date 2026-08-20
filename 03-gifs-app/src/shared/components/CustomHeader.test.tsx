import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';


describe('CustomHeader', () => {

  const testTitle = 'Test';
  
  test('Should render title correctly', () => {
      render(<CustomHeader title={testTitle} />);
      const title = screen.getByRole('heading', {level: 1})
      expect(title).toBeDefined()
  });

  test('Should render the description, when provided', () => {
      
      const testSubtitle = "New subtitle"
      render(<CustomHeader title={testTitle} subtitle={testSubtitle}/>)

      const subtitle = screen.getByText(testSubtitle);

      expect(subtitle).toBeDefined()
  });

  test('Should NOT render description, if not provided', () => {
      const { container } = render(<CustomHeader title={testTitle}/>)
      
      const divElement = container.querySelector('.content-center');

      const subtitle = divElement?.querySelector('h4');

      expect(subtitle).toBeNull()
  });
})
