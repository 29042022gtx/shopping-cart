import PropTypes from 'prop-types';
import cartType from '../prop-types/cartType.js';
import Cart from '../cart/Cart.jsx';
import styles from './cart-list.module.css';

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
              className={styles.btn}
            >
              close
            </button>
            <div className={styles.cartItems}>
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
            </div>
            <div className={styles.subTotal}>
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
              className={`${styles.btn} ${styles.payBTN}`}
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

export default CartList;
