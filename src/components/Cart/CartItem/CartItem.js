import React, { useState } from "react";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  adjustItemQty,
} from "../../../redux/shopping/shopping-action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(item.qty);

  const handleChange = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQty(item.id, e.target.value));
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>Title</p>
        <p className={styles.details__desc}>Description</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            onChange={handleChange}
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
          />
        </div>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
