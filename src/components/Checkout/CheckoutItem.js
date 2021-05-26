import React from "react";
import "./CheckoutItem.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../context/StateProvider";
function CheckoutItem() {
    const [{ basket }, dispatch] = useStateValue();
    let listItems = [];
    for (let i in basket) {
        console.log(basket[i]);
        listItems.push(<CheckoutProduct item={basket[i]} />);
    }
    console.log(listItems);
    return <div className="checkoutItem">{listItems}</div>;
}

export default CheckoutItem;
