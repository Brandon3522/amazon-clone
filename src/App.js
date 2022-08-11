import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [ { }, dispatch ] = useStateValue();

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
          <Route path='/checkout' element={<><Header></Header><Checkout></Checkout></>}>
          </Route>
          {/* Default Route must be last? */}
          <Route path='/' element={<><Header></Header><Home></Home></>}>
          </Route>
        </Routes>
      </div>
    </Router>    
   
  );
}

export default App;
