import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/shopping/shopping-action";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={item.image}
        alt={item.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/someID`}>
          <button className={`${styles.buttons__btn} ${styles.buttons__view}`}>
            View Item
          </button>
        </Link>
        <button
          onClick={() => dispatch(addToCart(item.id))}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
