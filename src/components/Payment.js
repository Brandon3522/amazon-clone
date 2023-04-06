import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from '../axios.js';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  // Stripe state
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const [processing, setProcessing] = useState('');
  const [success, setSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Generate stripe secret
    const getClientSecret = async () => {
      const response = await axios({
        method: 'POST',
        url: `/payments/create?total=${
          getBasketTotal(basket).toFixed(2) * 100
        }`, // Pass basket total to stripe
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
		console.log(getBasketTotal(basket))
		
  }, []);

  

  // Stripe functionality
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true); // Prevent button click while processing

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // Payment intent = payment confirmation

        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created, // Timestamp
          })
          .then(() => {
            console.log('Orders created successfully in db');
          })
          .catch((error) => {
            console.error('Error creating orders in db');
          });

        setSuccess(true);
        setError(null);
        setProcessing(false);

        // Empty basket
        dispatch({
          type: 'EMPTY_BASKET',
        });

        navigate('/orders');
      });
  };

  const handleChange = (e) => {
    // Listen for changes
    // display errors as user types card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 user address</p>
            <p>City, State</p>
          </div>
        </div>

        {/* Review */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items</h3>
          </div>
          <div className="payment_items">
            {basket.map((item, idx) => (
              <CheckoutProduct
								key={idx}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Details</h3>
          </div>
          <div className="payment_details">
            {/* Stripe functionality */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || success}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>

              {/* Error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
