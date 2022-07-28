import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_banner"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="banner"
                ></img>

                <div className="home_row">
                    <Product
                        id='51215022'
                        title="The lean startup"
                        price={29.99}
                        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"
                        rating={3}
                    ></Product>
                    <Product
                        id='51215022'
                        title="The lean startup"
                        price={29.99}
                        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"
                        rating={3}
                    ></Product>
                </div>

                <div className="home_row">
                    <Product
                        id='51215022'
                        title="The lean startup"
                        price={29.99}
                        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"
                        rating={3}
                    ></Product>
                    <Product
                        id='51215022'
                        title="The lean startup"
                        price={29.99}
                        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"
                        rating={3}
                    ></Product>
                    <Product
                        id='51215022'
                        title="The lean startup"
                        price={29.99}
                        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"
                        rating={3}
                    ></Product>
                </div>

                <div className="home_row">
                    <Product
                        id='51215022'
                        title="The lean startup"
                        price={29.99}
                        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"
                        rating={3}
                    ></Product>
                </div>
            </div>
        </div>
    );
}

export default Home;
