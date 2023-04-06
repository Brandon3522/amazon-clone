import React from 'react';
import './Home.css';
import Product from './Product';
import homeBanner from '../images/home_banner.jpg'
import { getAll } from '../axios';
import { useState, useEffect } from 'react';

function Home() {
	const [products, setProducts] = useState();

	// Retrieve all products
	useEffect(() => {
		getAll()
		.then(response => {
			setProducts(response)
		})
		.catch(error => {
			console.log(`Error retrieving products: ${error}`);
		})
	}, [])

	// Change to loading bar
	if (!products) {
		return (
			null
		)
	}

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_banner"
          src={homeBanner}
          alt="banner"
        ></img>
				{/* ALternating Rows: Implement better way to vary # of items per row */}
				<div className='home_row'>
				{products.slice(0, 2).map((product, index) => (
					<Product
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
						rating={2}
					></Product>
				))}
				</div>

				<div className='home_row'>
				{products.slice(2, 5).map((product, index) => (
					<Product
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
						rating={4}
					></Product>
				))}
				</div>

				<div className='home_row'>
				{products.slice(6, 7).map((product, index) => (
					<Product
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
						rating={3}
					></Product>
				))}
				</div>

				<div className='home_row'>
				{products.slice(7, 10).map((product, index) => (
					<Product
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
						rating={4}
					></Product>
				))}
				</div>

				<div className='home_row'>
				{products.slice(10, 12).map((product, index) => (
					<Product
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
						rating={5}
					></Product>
				))}
				</div>


				<div className='home_row'>
				{products.slice(12, 15).map((product, index) => (
					<Product
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
						rating={2}
					></Product>
				))}
				</div>

				<div className='home_row'>
				{products.slice(15, 16).map((product, index) => (
					<Product
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
						rating={4}
					></Product>
				))}
				</div>

				<div className='home_row'>
				{products.slice(16, 19).map((product, index) => (
					<Product
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
						rating={3}
					></Product>
				))}
				</div>

				<div className='home_row'>
				{products.slice(19, 20).map((product, index) => (
					<Product
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
						rating={5}
					></Product>
				))}
				</div>
      </div>
    </div>
  );
}

export default Home;
