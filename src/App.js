import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="app">
      <Header></Header>
        <Routes>
          <Route path='/checkout' element={<Checkout></Checkout>}>
          </Route>
          {/* Default Route must be last? */}
          <Route path='/' element={<Home></Home>}>
          </Route>
        </Routes>
      </div>
    </Router>    
   
  );
}

export default App;
