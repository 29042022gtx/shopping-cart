import { act, render, screen } from '@testing-library/react';
import { vi, describe, expect, it } from 'vitest';
import ProductList from '../product-list/ProductList';
import { useState } from 'react';

const products = [
  {
    id: 1,
    image: './image-path',
    title: 'Item 1',
    price: 10,
  },
  {
    id: 2,
    image: './image-path',
    title: 'Item 2',
    price: 12,
  },
];

let resolve;
function fetch() {
  return new Promise((_resolve) => {
    resolve = _resolve;
  });
}

vi.mock('../../hooks/useProducts', () => {
  return {
    useProducts: () => {
      const [products, setProducts] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
      fetch()
        .then((response) => {
          setProducts(response);
        })
        .catch((err) => setError(err))
        .finally(() => {
          setLoading(false);
        });
      return { products, error, loading };
    },
  };
});

vi.mock('../product/Product.jsx', () => {
  return {
    default: ({product, addToCart}) => {
      return <div data-testid="product">{JSON.stringify(product)}</div>;
    },
  };
});

describe('ProductList component', async () => {
  it('render product', async () => {
    act(() => {
      render(<ProductList />);
    });
    await act(async () => {
      resolve(products);
    });
    const productComponents = screen.queryAllByTestId('product');
    expect(productComponents.length).toBe(2);
    for (let i = 1; i < products.length; i += 1) {
      const prodComponent = productComponents[i];
      const prodText = prodComponent.textContent;
      const prodObject = JSON.parse(prodText);
      expect(prodObject).toEqual(products[i]);
    }
  });
});
