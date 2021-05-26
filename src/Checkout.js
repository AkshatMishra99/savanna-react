import React from "react";
import "./Checkout.css";
import CheckoutItem from "./CheckoutItem";
import Subtotal from "./Subtotal";
function Checkout() {
    return (
        <div className="checkout">
            <div className="pre-checkout">
                <Subtotal />
            </div>
            <div className="checkout__left">
                <div className="checkout__title">
                    <h2>Your shopping basket</h2>
                    <CheckoutItem />
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
