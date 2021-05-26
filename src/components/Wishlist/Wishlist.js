import React from "react";
import "../Checkout/CheckoutProduct.css";
import "./Wishlist.css";
import WishlistProduct from "./WishlistProduct";
import { useStateValue } from "../../context/StateProvider";
function Wishlist() {
    const [{ wishlist }, dispatch] = useStateValue();
    let listItems = [];
    for (let i in wishlist) {
        console.log(wishlist[i]);
        listItems.push(<WishlistProduct item={wishlist[i]} />);
    }
    console.log(listItems);
    return (
        <div className="checkoutItem">
            <div className="wishlist__title">
                <h2>Your Wishlist</h2>
            </div>
            {listItems}
        </div>
    );
}

export default Wishlist;
