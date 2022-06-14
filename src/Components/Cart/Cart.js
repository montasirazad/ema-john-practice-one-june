import React from 'react';

const Cart = (props) => {

    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    const shipping = 15;
    const tax = total * .1;
    const totalPrice = total + tax + shipping;
    return (
        <div>
            <h3>Items Added: {cart.length}</h3>
            <p>Total price: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total price: {totalPrice}</p>
        </div>
    );
};

export default Cart;