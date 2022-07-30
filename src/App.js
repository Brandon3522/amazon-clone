import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/checkout' element={<><Header></Header><Checkout></Checkout></>}>
          </Route>
          <Route path='/' element={<><Header></Header><Home></Home></>}>
          </Route>
        </Routes>
      </div>
    </Router>    
   
  );
}

export default App;
