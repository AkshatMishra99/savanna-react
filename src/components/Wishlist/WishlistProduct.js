import React from "react";
import "../Checkout/CheckoutProduct.css";
import { useStateValue } from "../../context/StateProvider";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
function WishlistProduct({ item }) {
    const [state, dispatch] = useStateValue();
    console.log(item);
    const addToWishlist = () => {
        console.log("Wishlist pressed");
        dispatch({
            type: "ADD_TO_WISHLIST",
            item: {
                id: item.id,
                title: item.title,
                image: item.img,
                price: item.price,
                rating: item.rating,
            },
        });
    };
    const removeFromWishlist = () => {
        console.log("Wishlist pressed");
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            item: {
                id: item.id,
            },
        });
    };
    const icon = (
        <FavoriteIcon className="fav-icon" onClick={removeFromWishlist} />
    );
    return (
        <div className="checkout">
            <div className="checkoutItem-container">
                <div className="checkitem-left">
                    <img className="checkitem-img" src={item.image}></img>
                </div>
                <div className="checkitem-right">
                    <div className="check-item-content">
                        <div className="item-title">{item.title}</div>
                        <small>₹</small>
                        <strong>{item.price}</strong>
                        <div
                            className="item-rating"
                            style={{ display: "flex" }}
                        >
                            {Array(item.rating)
                                .fill()
                                .map((_, i) => (
                                    <p>⭐</p>
                                ))}
                        </div>
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishlistProduct;
