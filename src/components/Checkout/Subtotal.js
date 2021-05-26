import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { Button } from "react-bootstrap";
import { useStateValue } from "../../context/StateProvider";
import { calculateItems, getBasketTotal } from "../../context/reducer";
import { Link } from "react-router-dom";
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({calculateItems(basket)} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"₹"}
            />
            <Link to="/proceed_to_checkout">
                <div className="OrderButton">
                    <Button className="proceedToOrder">
                        Proceed to checkout
                    </Button>
                </div>
            </Link>
        </div>
    );
}

export default Subtotal;
