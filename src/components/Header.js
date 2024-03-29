import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import amazonLogo from '../images/amazon_logo.png'

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  // logout if user signs out
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src={amazonLogo}
          alt="Amazon"
        ></img>
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        {/* !user && '/login' = if there is no user then push to login page */}
        <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLine1">
              Hello {user ? user.email : 'Guest'}
            </span>
            {/* user = true => sign out */}
            <span className="header_optionLine2">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to="/orders" style={{ textDecoration: 'none' }}>
          <div className="header_option">
            <span className="header_optionLine1">Returns</span>

            <span className="header_optionLine2">& Orders</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLine1">Your</span>

          <span className="header_optionLine2">Prime</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="header_optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>

            <span className="header_optionLine2 header_basketCount">
              {basket?.length}
            </span>
            {/* import basket.length from state context API */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
