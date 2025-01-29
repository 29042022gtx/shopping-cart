import PropTypes from 'prop-types';
import { useProducts } from '../../hooks/useProducts';
import Product from '../product/Product.jsx'
import styles from './product-list.module.css';

function ProductList({ addToCart }) {
  const { products, error, loading } = useProducts();
  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>A network error was encountered</div>;
  }
  return (
    <div>
      <div>Products list</div>
      <div className={styles.cardList}>
        {products.map((productItem) => {
          return (
            <Product
              key={productItem.id}
              product={productItem}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  addToCart: PropTypes.func,
};

export default ProductList;
