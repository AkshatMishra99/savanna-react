import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../context/StateProvider";

function CheckoutProduct({ item }) {
    let count = 1;
    const [{ basket }, dispatch] = useStateValue();
    const updateBasketOnCheck = (event) => {
        if (!event.target.checked)
            dispatch({
                type: "UPDATE_FROM_BASKET",
                item: { ...item[0] },
            });
    };
    console.log(item);
    const updateBasket = (event) => {
        const count = parseInt(
            document.querySelector("#qty-" + item[0].id).value
        );
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item: { ...item[0] },
            count: count,
        });
    };
    return (
        <div>
            <div className="checkoutItem-container">
                <div className="checkItem-checkbox">
                    <input
                        id="checkbox-1"
                        type="checkbox"
                        value=""
                        defaultChecked="true"
                        onChange={updateBasketOnCheck}
                    />
                </div>
                <div className="checkitem-left">
                    <img className="checkitem-img" src={item[0].image}></img>
                </div>
                <div className="checkitem-right">
                    <div className="check-item-content">
                        <div className="item-title">{item[0].title}</div>
                        <small>₹</small>
                        <strong>{item[0].price}</strong>
                        <div
                            className="item-rating"
                            style={{ display: "flex" }}
                        >
                            {Array(item[0].rating)
                                .fill()
                                .map((_, i) => (
                                    <p>⭐</p>
                                ))}
                        </div>
                        <select
                            className="qty-select"
                            id={"qty-" + item[0].id}
                            value={item[1]}
                            onChange={updateBasket}
                        >
                            {Array(10)
                                .fill()
                                .map((_, i) => (
                                    <option>{i}</option>
                                ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutProduct;
