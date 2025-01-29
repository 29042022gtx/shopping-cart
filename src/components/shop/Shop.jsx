import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts.js';
import PropTypes from 'prop-types';
import cartType from '../prop-types/cartType.js';
import Product from '../product/Product.jsx';
import Cart from '../cart/Cart.jsx';
import Footer from '../footer/footer.jsx';
import styles from './shop.module.css';

function CartBTN({ quantity }) {
  return (
    <button className={styles.cartBTN}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>cart</title>
        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
      </svg>
      Cart
      <span className={styles.cartBTNBadge}>{quantity}</span>
    </button>
  );
}

CartBTN.propTypes = {
  quantity: PropTypes.number,
};

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

function CartList({ show, setShow, carts, setCarts }) {
  if (show) {
    document.body.classList.add('showing-modal');
  } else {
    setTimeout(() => {
      document.body.classList.remove('showing-modal');
    }, 500);
  }
  return (
    <section className={`modal ${show && 'show fade'}`}>
      <div className="modal-body">
        <div className="modal-content">
          <div className={styles.cartList}>
            <button
              onClick={() => {
                setShow(false);
              }}
              className="modal-close-btn"
            >
              close
            </button>
            {carts.map((cartItem) => {
              return (
                <Cart
                  key={cartItem.id}
                  carts={carts}
                  setCarts={setCarts}
                  cartItem={cartItem}
                />
              );
            })}
            <div>
              Subtotal({carts.length}): $
              {Math.round(
                carts.reduce((prev, cartItem) => {
                  return prev + cartItem.price * cartItem.quantity;
                }, 0) * 100
              ) / 100}
            </div>
            <button
              onClick={() => {
                setCarts([]);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>credit-card-check-outline</title>
                <path d="M13 19C13 18.66 13.04 18.33 13.09 18H3V12H19V13C19.7 13 20.37 13.13 21 13.35V6C21 4.89 20.11 4 19 4H3C1.89 4 1 4.89 1 6V18C1 19.1 1.89 20 3 20H13.09C13.04 19.67 13 19.34 13 19M3 6H19V8H3V6M17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25L17.75 22" />
              </svg>
              Pay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

CartList.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  carts: PropTypes.arrayOf(cartType),
  setCarts: PropTypes.func,
};

function Shop() {
  const [carts, setCarts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="content-wrapper">
      <CartBTN quantity={carts.length} />
      <button
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        modal
      </button>
      <CartList
        show={showModal}
        setShow={setShowModal}
        carts={carts}
        setCarts={setCarts}
      />
      <ProductList addToCart={addToCart} />
      <Footer />
    </section>
  );

  function addToCart(cartToAdd) {
    cartToAdd.quantity = parseInt(cartToAdd.quantity) || 1;
    const targetItem = carts.find((cartItem) => {
      return cartItem.id == cartToAdd.id;
    });
    if (!targetItem) {
      setCarts([...carts, cartToAdd]);
      return;
    }
    targetItem.quantity += cartToAdd.quantity;
    setCarts([...carts]);
  }
}

export default Shop;
