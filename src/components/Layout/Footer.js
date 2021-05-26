import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Link, Typography } from "@material-ui/core";
import { useStateValue } from "../../context/StateProvider";
import { auth } from "../../firebase";
function Copyright() {
    return (
        <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            style={{ color: "rgb(232, 230, 227)" }}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Savanna.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function Footer() {
    const [{ user }] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };
    return (
        <div className="footer">
            <a href="#nav-top" style={{ textDecoration: "none" }}>
                <div className="take-to-top">
                    <span>Back to top</span>
                </div>
            </a>
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="company-logo">
                        <img
                            className="company-logo-img"
                            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            alt="companylogo"
                        />
                    </div>
                    <ul className="socialBar">
                        <li>
                            <FacebookIcon
                                style={{ height: "40px", width: "40px" }}
                            />
                        </li>
                        <li>
                            <InstagramIcon
                                style={{ height: "40px", width: "40px" }}
                            />
                        </li>
                        <li>
                            <LinkedInIcon
                                style={{ height: "40px", width: "40px" }}
                            />
                        </li>
                        <li>
                            <TwitterIcon
                                style={{ height: "40px", width: "40px" }}
                            />
                        </li>
                        <li>
                            <YouTubeIcon
                                style={{ height: "40px", width: "40px" }}
                            />
                        </li>
                    </ul>
                    <div className="footer-promo">
                        <span className="promo-text">Shop Savanna.in</span>
                    </div>
                    <div className="company-info"></div>
                </div>
                <div className="footer-middle">
                    <div className="about-us">
                        <h2>About Savanna.com</h2>
                        <span>
                            Savanna.com is an initiative on two college students
                            working for their project. They work on their own at
                            their organisation which is someday deemed to be
                            bigger than todays top sharks.
                        </span>
                    </div>
                    <div className="links">
                        <div className="quick-links">
                            <h2>Quick Links</h2>
                            <ul className="quick-links-items">
                                <li>About us</li>
                                <li>Contact us</li>
                                <li>Orders</li>
                                <li>Returns</li>
                                <li>Help</li>
                            </ul>
                        </div>
                        <div className="some-links">
                            <ul className="quick-links-items">
                                <li>Wishlist</li>
                                <li>Your Account</li>
                                <li>Customer Service</li>
                                <li>Sell</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h2>Contact Us</h2>
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Enter Message"
                                    rows="3"
                                />
                            </Form.Group>
                            <Button
                                className="contact-us-submit"
                                type="submit"
                                variant="outline-info"
                            >
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    style={{ marginRight: "5px" }}
                                />
                                Send
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="footer-lower">
                <div className="user-options">
                    <ul>
                        <li>English</li>
                        <li>Switch Accounts</li>
                        <li>
                            <Link to="/sign_in">
                                <div
                                    onClick={handleAuthentication}
                                    style={{
                                        color: "rgb(232, 230, 227)",
                                        fontFamily: "Roboto Mono",
                                    }}
                                >
                                    {user ? "Sign Out" : "Sign In"}
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="add-info">
                    <ul>
                        <li>Conditions of Use</li>
                        <li>Privacy Notice</li>
                        <li>Interest-Bases Ads</li>
                    </ul>
                </div>
                <Box mt={5}>
                    <Copyright style={{ color: "rgb(232, 230, 227)" }} />
                </Box>
            </div>
        </div>
    );
}

export default Footer;
