import PropTypes from 'prop-types';
import cartType from '../prop-types/cartType.js';
import styles from './cart.module.css';

function Cart({ carts, setCarts, cartItem }) {
  return (
    <div>
      <img
        src={cartItem.image}
        alt={cartItem.title}
        className={styles.cartImage}
      />
      <div>
        <div className={styles.cartInfo}>
          <b>{cartItem.title}</b>
        </div>
        <div className={styles.cartInfo}>
          <b>${cartItem.price}</b>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            const targetCart = carts.find((cartInList) => {
              return cartInList.id == cartItem.id;
            });
            if (!targetCart || targetCart.quantity <= 1) {
              return;
            }
            targetCart.quantity -= 1;
            setCarts([...carts]);
          }}
        >
          -
        </button>
        <input
          name="quantity"
          type="number"
          min={1}
          value={cartItem.quantity}
          onInput={(e) => {
            const targetCart = carts.find((cartInList) => {
              return cartInList.id == cartItem.id;
            });
            if (!targetCart) {
              return;
            }
            targetCart.quantity = e.target.value;
            setCarts([...carts]);
          }}
        />
        <button
          onClick={() => {
            const targetCart = carts.find((cartInList) => {
              return cartInList.id == cartItem.id;
            });
            if (!targetCart) {
              return;
            }
            targetCart.quantity += 1;
            setCarts([...carts]);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          const targetCartIndex = carts.findIndex((cartInList) => {
            return cartInList.id == cartItem.id;
          });
          if (targetCartIndex == -1) {
            return;
          }
          carts.splice(targetCartIndex, 1);
          setCarts([...carts]);
        }}
        aria-label="remove item from cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>cart-minus</title>
          <path d="M16 6V4H8V6M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z" />
        </svg>
        Remove
      </button>
      <div>
        Total:{' '}
        <b>${Math.round(cartItem.price * cartItem.quantity * 100) / 100}</b>
      </div>
    </div>
  );
}

Cart.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.shape(cartType)),
  setCarts: PropTypes.func,
  cartItem: PropTypes.shape(cartType),
};

export default Cart;
