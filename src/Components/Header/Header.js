import React from 'react';
import './Header.css';
import emaJohnLogo from '../../images/logo.png'


const Header = () => {
    return (
        <div className='header'>
            <img src={emaJohnLogo} alt="" className='logo' />

            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order</a>
                <a href="/inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default Header;