import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    // console.log('basket', basket)
    // console.log(rating)

    const addToBasket = () => {
        // dispatch an item to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {/* Displays stars dependent on rating value */}
                    {/* _ = dont care about value, i = index */}
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img className="product_image" src={image} alt="product"></img>

            <button className="product_button" onClick={addToBasket}>
                Add to Basket
            </button>
        </div>
    );
}

export default Product;
