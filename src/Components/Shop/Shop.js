import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {

    const [products,setproducts] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then()

    },[])
    
    return (
        <div>
            <h4>this is shop</h4>
        </div>
    );
};

export default Shop;