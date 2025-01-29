import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartList from '../cart-list/CartList.jsx';

vi.mock('../cart/Cart.jsx', () => {
  return {
    default: ({ cartItem }) => {
      return <div data-testid="cart">{JSON.stringify(cartItem)}</div>;
    },
  };
});

const carts = [
  {
    id: 1,
    image: './image-path',
    title: 'Item title',
    price: 10,
    quantity: 1,
  },
  {
    id: 2,
    image: './image-path',
    title: 'Item title',
    price: 12,
    quantity: 5,
  },
];

describe('CartList component', () => {
  it('render carts', () => {
    render(<CartList carts={carts} />);
    const cartComponents = screen.queryAllByTestId('cart');
    expect(cartComponents.length).toBe(2);
    for (let i = 0; i < carts.length; i += 1) {
      const cartText = cartComponents[i].textContent;
      const cartObj = JSON.parse(cartText);
      expect(cartObj).toEqual(carts[i]);
    }
  });
});
