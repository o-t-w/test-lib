import React from 'react';
import Button from '../src/components/Button';
import { render } from '@testing-library/react';

test('silly random test test', () => {
    const { getByText } = render(<Button>HELLO!</Button>)
    const button = document.body.querySelector('button');
    expect(button.textContent).toBe('HELLO!');
})
