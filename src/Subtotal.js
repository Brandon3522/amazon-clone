import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  // replaced with getBasketTotal from reducer file
  // const basketPrice = (basket) => {
  //     // get price of items in the basket
  //     // add together for the sum
  //     // return the total price
  //     let sum = 0;
  //     for (item in basket) {
  //         sum += item.price
  //     }

  //     return sum;
  // }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input className="subtotal_giftInput" type="checkbox"></input>
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button className="subtotal_button" onClick={(e) => navigate('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
