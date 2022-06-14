import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then()

    }, [])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h4>this is shop</h4>
            </div>

            <div className='cart-container'>
                <h3>this is cart</h3>
            </div>
        </div>
    );
};

export default Shop;