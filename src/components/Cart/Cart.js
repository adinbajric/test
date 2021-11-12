import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.shop.cart);
  const [item, setItem] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((element) => {
      items += element.qty;
      price += element.qty * element.price;
    });

    setItem(items);
    setPrice(price);
  }, [cart]);
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: {item}</span>
          <span>$ {price}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
