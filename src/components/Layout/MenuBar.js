import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./MenuBar.css";
function MenuBar() {
    return (
        <div className="menubar">
            <div className="home__menu">
                <ul className="home__menuList">
                    <li>
                        <div className="dropdown">
                            <div className="dropdown__header">
                                <button className="dropbtn">Electronics</button>
                                <ExpandLessIcon className="expandless" />
                            </div>
                            <div className="dropdown__content">
                                <a href="#">
                                    <strong>Mobiles</strong>
                                </a>
                                <a href="#">Smartphones</a>
                                <a href="#">a</a>
                                <a href="#">b</a>
                                <a href="#">c</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <div className="dropdown__header">
                                <button className="dropbtn">
                                    TV And Appliances
                                </button>
                                <ExpandLessIcon className="expandless" />
                            </div>
                            <div className="dropdown__content">
                                <a href="#">
                                    <strong>Mobiles</strong>
                                </a>
                                <a href="#">Smartphones</a>
                                <a href="#">a</a>
                                <a href="#">b</a>
                                <a href="#">c</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <div className="dropdown__header">
                                <button className="dropbtn">Women</button>
                                <ExpandLessIcon className="expandless" />
                            </div>
                            <div className="dropdown__content">
                                <a href="#">
                                    <strong>Mobiles</strong>
                                </a>
                                <a href="#">Smartphones</a>
                                <a href="#">a</a>
                                <a href="#">b</a>
                                <a href="#">c</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <div className="dropdown__header">
                                <div className="dropdown__header">
                                    <button className="dropbtn">
                                        Baby & Kids
                                    </button>
                                    <ExpandLessIcon className="expandless" />
                                </div>
                            </div>
                            <div className="dropdown__content">
                                <a href="#">Mobiles</a>
                                <a href="#">Smartphones</a>
                                <a href="#">a</a>
                                <a href="#">b</a>
                                <a href="#">c</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <div className="dropdown__header">
                                <button className="dropbtn">
                                    Sports, Books & More
                                </button>
                                <ExpandLessIcon className="expandless" />
                            </div>
                            <div className="dropdown__content">
                                <a href="#">
                                    <strong>Mobiles</strong>
                                </a>
                                <a href="#">Smartphones</a>
                                <a href="#">a</a>
                                <a href="#">b</a>
                                <a href="#">c</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <div className="dropdown__header">
                                <button className="dropbtn">Flights</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <div className="dropdown__header">
                                <button className="dropbtn">Offer Zone</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuBar;
