import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingCart";
import Menu from "./MenuBar.js";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { calculateItems } from "./reducer";
import { auth } from "./firebase";
import { FormControl, InputGroup } from "react-bootstrap";
import BookmarkIcon from "@material-ui/icons/Bookmark";
function Header() {
    const [{ basket }, dispatch] = useStateValue();
    const [{ user }] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };
    return (
        <div className="header" id="#nav-top">
            <div className="header__container">
                <div className="container-left">
                    <Link to="/">
                        <img
                            className="header__logo"
                            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        />
                    </Link>
                    <div className="header__nav">
                        <Link to="/sign_in">
                            <div
                                onClick={handleAuthentication}
                                className="header__option"
                            >
                                <span
                                    className="header__optionLineOne"
                                    id="hello-card"
                                >
                                    Hello {user ? user.email : "Guest! "}
                                </span>
                                <span className="header__optionLineTwo">
                                    {user ? "Sign Out" : "Sign In"}
                                </span>
                            </div>
                        </Link>
                        <div className="header__option" id="order-card">
                            <span className="header__optionLineOne">
                                Returns
                            </span>
                            <span className="header__optionLineTwo">
                                & Orders
                            </span>
                        </div>
                        <Link to="/checkout">
                            <div className="header__optionBasket">
                                <ShoppingBasketIcon />
                                <span className="header__optionLineTwo header__basketCount">
                                    {calculateItems(basket)}
                                </span>
                            </div>
                        </Link>
                        <Link to="/wishlist">
                            <div className="header__wishlist">
                                <BookmarkIcon style={{ color: "white" }} />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="header__search">
                    <select className="header__category">
                        <option>All</option>
                        <option>Department</option>
                    </select>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            // className="header__searchInput"
                            style={{
                                width: "280px",
                                "justify-content": "center",
                                "z-index": "0",
                                height: "42px",
                                "margin-top": "16px",
                            }}
                        />
                    </InputGroup>
                    <div className="header__searchIcon">
                        <SearchIcon height="42px" />
                    </div>
                </div>
            </div>
            <div className="search__bar">
                <div className="header__search2">
                    <input
                        className="header__searchInput2"
                        type="text"
                        placeholder="Search Savana.com"
                    />
                    <div className="header__searchIcon2">
                        <SearchIcon height="42px" />
                    </div>
                </div>
            </div>
            <div>
                <Menu />
            </div>
        </div>
    );
}

export default Header;
