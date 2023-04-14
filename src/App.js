import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';
import SignUp from './components/SignUp';

// Stripe public API key
const promise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_API_KEY
);

function App() {
  const [{}, dispatch] = useStateValue();

  // Keep track of current user with firebase auth
  useEffect(() => {
    // runs once when the app loads if [] is empty, otherwise runs when object in list changes
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user just logged in or user was logged in
        // send user info to data layer
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
					<Route path="/SignUp" element={<SignUp></SignUp>}></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header></Header>
                <Checkout></Checkout>
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header></Header>
                <Elements stripe={promise}>
                  <Payment></Payment>
                </Elements>
              </>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <>
                <Header></Header>
                <Orders></Orders>
              </>
            }
          ></Route>
          {/* Default Route must be last? */}
          <Route
            path="/"
            element={
              <>
                <Header></Header>
                <Home></Home>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
