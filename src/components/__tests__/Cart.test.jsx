import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from '../cart/Cart';

const cartItem = {
  id: 1,
  image: './image-path',
  title: 'Item title',
  price: 10,
  quantity: 1,
};
const carts = [cartItem];

describe('Cart component', () => {
  it('call fn after button click', async () => {
    const setCarts = vi.fn();
    const user = userEvent.setup();
    render(
      <Cart
        carts={carts}
        setCarts={setCarts}
        cartItem={cartItem}
      />
    );
    const increaseBTN = screen.getByRole('button', { name: '+' });
    const descreaseBTN = screen.getByRole('button', { name: '-' });
    const removeFromCartBTN = screen.getByRole('button', {
      name: 'remove item from cart',
    });
    await Promise.all([
      await user.click(increaseBTN),
      await user.click(descreaseBTN),
      await user.click(removeFromCartBTN),
    ]);
    expect(setCarts).toHaveBeenCalledTimes(3);
  });
});
