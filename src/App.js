import React from "react";
import "./App.css";
import Header from "./Header";
import SignInSide from "./SignInSide";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import CreateAccount from "./CreateAccount";
import AddressForm from "./AddressForm";
import PlaceOrder from "./PlaceOrder";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Footer from "./Footer";
import ProductDesc from "./ProductDesc";
import Wishlist from "./Wishlist";
function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);

            if (authUser) {
                dispatch({ type: "SET_USER", user: authUser });
            } else {
                dispatch({ type: "SET_USER", user: null });
            }
        });
    }, []);
    return (
        <Router>
            <div className="app">
                <Header />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/sign_in">
                        <SignInSide />
                    </Route>
                    <Route path="/sign_up">
                        <CreateAccount />
                    </Route>
                    <Route path="/proceed_to_checkout">
                        <PlaceOrder />
                    </Route>
                    <Route path="/product_desc">
                        <ProductDesc />
                    </Route>
                    <Route path="/wishlist">
                        <Wishlist />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
