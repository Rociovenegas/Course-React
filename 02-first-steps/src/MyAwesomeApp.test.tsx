import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
    test('should render name', () => {
        const { container } = render(<MyAwesomeApp name='Gaby' lastName='Jhonny' />);
        //console.log(container.innerHTML)

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain('Mongi')
        const h3 = container.querySelector('h3');
        expect(h3?.innerHTML).toContain('Hermosa')
    })

    test('should render name - screen', () => {
        render(<MyAwesomeApp name='Gaby' lastName='Jhonny' />);
        screen.debug()

        const h1 = screen.getByTestId('Test-01');
        expect(h1.innerHTML).toContain('Mongi');

    })

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp name='Gaby' lastName='Jhonny' />);
        expect(container).toMatchSnapshot();
    })

    test('should match snapshot - screen', () => {
        render(<MyAwesomeApp name='Gaby' lastName='Jhonny' />);
        expect(screen.getByTestId('div-app-01')).toMatchSnapshot();
    })
});

//div-app-01