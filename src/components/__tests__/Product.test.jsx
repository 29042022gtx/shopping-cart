import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from '../product/Product';

describe('Product component', () => {
  it('render product', () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<Product />);
    expect(container).toMatchSnapshot();
  });

  it('increase 1 after button click', async () => {
    const user = userEvent.setup();
    render(<Product />);
    const prevSpinVal = parseInt(screen.getByRole('spinbutton').value);
    if (!prevSpinVal) {
      return;
    }
    const button = screen.getByRole('button', { name: '+' });
    await user.click(button);
    const currentSpinVal = parseInt(screen.getByRole('spinbutton').value);
    expect(currentSpinVal).toBe(prevSpinVal + 1);
  });

  it('decrease 1 after button click', async () => {
    const user = userEvent.setup();
    render(<Product />);
    const spin = screen.getByRole('spinbutton');
    const prevSpinVal = parseInt(spin.value);
    if (!prevSpinVal) {
      return;
    }
    const button = screen.getByRole('button', { name: '-' });
    await user.click(button);
    const currentSpinVal = parseInt(spin.value);
    const minSpinVal = parseInt(spin.min);
    if (currentSpinVal == minSpinVal) {
      return;
    }
    expect(currentSpinVal).toBe(prevSpinVal - 1);
  });

  it('call fn after button click', async () => {
    const user = userEvent.setup();
    const addToCart = vi.fn();
    render(<Product addToCart={addToCart} />);
    const button = screen.getByRole('button', { name: 'add to cart' });
    await user.click(button);
    expect(addToCart).toHaveBeenCalled();
  });
});
