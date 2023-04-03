import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <div>
          <h3 className="user_greeting">Hi, {user ? user.email : 'Guest'}</h3>
          <h2 className="checkout_title">Your shopping basket</h2>

          {/* for every item in basket return CheckoutProduct*/}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            ></CheckoutProduct>
          ))}

          {/* CheckoutProduct */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
