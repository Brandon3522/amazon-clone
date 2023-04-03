import React from 'react';
import './Home.css';
import Product from './Product';
import homeBanner from '../images/home_banner.jpg'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_banner"
          src={homeBanner}
          alt="banner"
        ></img>

        <div className="home_row">
          <Product
            id="51215022"
            title="The lean startup"
            price={29.99}
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"
            rating={3}
          ></Product>
          <Product
            id="51215023"
            title="It Ends with Us: A Novel"
            price={10.26}
            image="https://images-na.ssl-images-amazon.com/images/I/71j0FLAauxL._AC_UL450_SR450,320_.jpg"
            rating={5}
          ></Product>
        </div>

        <div className="home_row">
          <Product
            id="51215024"
            title="Mighty Patch Original from Hero Cosmetics"
            price={12.99}
            image="https://images-na.ssl-images-amazon.com/images/I/615258clL6L._AC_UL450_SR450,320_.jpg"
            rating={5}
          ></Product>
          <Product
            id="51215025"
            title="Brian's Hunt (A Hatchet Adventure)"
            price={9.19}
            image="https://images-na.ssl-images-amazon.com/images/I/A1aY1vXmBpL._AC_UL160_SR160,160_.jpg"
            rating={4}
          ></Product>
          <Product
            id="51215026"
            title="Five Star Loose Leaf Paper, 3 Pack, 3 Hole Punched, Reinforced Filler Paper, Wide Ruled Paper"
            price={19.69}
            image="https://m.media-amazon.com/images/I/41o7mvF9m9L.jpg"
            rating={3}
          ></Product>
        </div>

        <div className="home_row">
          <Product
            id="51215027"
            title="Sharpie 27145 Pocket Highlighters, Chisel Tip, Assorted Colors, 12-Count"
            price={5.49}
            image="https://m.media-amazon.com/images/I/51CoMNC6MDL.jpg"
            rating={3}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
