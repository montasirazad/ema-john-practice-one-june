import React from 'react';
import './Product.css'


const Product = (props) => {
    const { name, img, price, seller, stock } = props.product;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h3>{name}</h3>
                <h5>Price: {price} $</h5>
                <p>Seller: {seller}</p>
                <p>Stock: {stock}</p>
                <button onClick={()=>props.handleAddToCart(props.product)} className='btn-regular'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;