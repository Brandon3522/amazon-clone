import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'; 
import Orders from './Orders';

// Run npm install only in Functions folder / Backend

const promise = loadStripe(
	'pk_test_51Mmio6B6L0lGaXM9gqCrQaNTypmNIyhnKRP66mUXc3FHfUGmXNMz1ayrxIfMI7Qhb1bkXHa1U0YMFH8dNoZTCH4S00PaMQrrgM'
);

function App() {
  const [ {}, dispatch ] = useStateValue();

  // Keep track of current user with firebase auth
  useEffect(() => {
    // runs once when the app loads if [] is empty, otherwise runs when object in list changes
    // 
    auth.onAuthStateChanged(authUser => {
      console.log('User:', authUser)

      if (authUser) {
        // user just logged in or user was logged in

        // sends user info to data layer
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/checkout' element={<><Header></Header><Checkout></Checkout></>}></Route>
					<Route path='/payment' element={<><Header></Header>
						<Elements stripe={promise}><Payment></Payment></Elements></>}>	
					</Route>
					<Route path='/orders' element={<><Header></Header><Orders></Orders></>}></Route>
          {/* Default Route must be last? */}
          <Route path='/' element={<><Header></Header><Home></Home></>}>
          </Route>
        </Routes>
      </div>
    </Router>    
   
  );
}

export default App;
