import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
function Product({ id, title, img, price, rating, obj }) {
    const [state, dispatch] = useStateValue();
    console.log(id in state.wishlist);

    const addToBasket = () => {
        //dispatch the item into the data layer
        console.log("basket pressed");
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: img,
                price: price,
                rating: rating,
            },
        });
    };
    const addToWishlist = () => {
        console.log("Wishlist pressed");
        dispatch({
            type: "ADD_TO_WISHLIST",
            item: {
                id: id,
                title: title,
                image: img,
                price: price,
                rating: rating,
            },
        });
    };
    const removeFromWishlist = () => {
        console.log("Wishlist pressed");
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            item: {
                id: id,
            },
        });
    };
    const icon = !(id in state.wishlist) ? (
        <FavoriteBorderIcon className="fav-icon" onClick={addToWishlist} />
    ) : (
        <FavoriteIcon className="fav-icon" onClick={removeFromWishlist} />
    );
    return (
        <div className="product">
            <div className="product__card">
                <Link
                    to={{
                        pathname: "/product_desc",
                        state: obj,
                    }}
                >
                    <img
                        className="card__img"
                        variant="top"
                        src={img}
                        alt="img"
                    />
                </Link>
                <div className="icon-container">
                    <span></span>
                    {icon}
                </div>
            </div>
        </div>
    );
}

export default Product;
