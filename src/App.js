import React from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import SignInSide from "./components/Auth/SignInSide";
import Home from "./components/Layout/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import CreateAccount from "./components/Auth/CreateAccount";
import PlaceOrder from "./components/Orders/PlaceOrder";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./context/StateProvider";
import Footer from "./components/Layout/Footer";
import ProductDesc from "./components/Products/ProductDesc";
import Wishlist from "./components/Wishlist/Wishlist";
function App() {
    const [dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);

            if (authUser) {
                dispatch({ type: "SET_USER", user: authUser });
            } else {
                dispatch({ type: "SET_USER", user: null });
            }
        });
    }, [dispatch]);
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
