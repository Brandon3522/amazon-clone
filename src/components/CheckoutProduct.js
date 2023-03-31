import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct_image"
        src={image}
        alt="product_image"
      ></img>

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>

        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {/* _ = dont care about value, i = index */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket} className="checkoutProduct_button">
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
