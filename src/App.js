import './App.css';
import Header from './Header';
import Home from './Home';
import { Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header></Header>
      {/* Home */}
      <Home></Home>


    </div>
   
  );
}

export default App;
