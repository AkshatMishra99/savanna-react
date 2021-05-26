import React from "react";
import "./Home.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
/* import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */
import { Link } from "react-router-dom";
function Home() {
    const [{ basket, user, inventory }, dispatch] = useStateValue();
    let prod_list_container = [];
    for (let i in inventory.category) {
        let prod_cat = [];
        console.log(i);
        for (let j in inventory.category[i]) {
            let k = inventory.category[i][j];
            prod_cat.push(
                <Product
                    title={k.title}
                    img={k.imgset[0]}
                    price={k.price}
                    rating={k.rating}
                    id={k.id}
                    obj={k}
                />
            );
        }
        prod_list_container.push(
            <div className="category__container">
                <div className="category__titles">
                    <h2>{i}</h2>
                </div>
                <div className="product__container">{prod_cat}</div>
            </div>
        );
    }
    return (
        <div className="home">
            <Carousel className="carousel__container" id="nav-top">
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCar"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro_Max/Available_Now/Per_Daycallout/TallHero_1500X600_1._CB405352815_.jpg"
                        alt="First Slide"
                    ></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCar"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/MonsterSeries/V203057508_SamsungM_M21_M31_GW_tall_hero_1500x600._CB410822764_.jpg"
                        alt="Second Slide"
                    ></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCar"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg"
                        alt="Third Slide"
                    ></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCar"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Avicii/September/14th/GW/27999/V214721272_IN_WLME_Avicii_LP_DesktopTallHero_1500x600_1._CB405680799_.jpg"
                        alt="4th slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCar"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/OnePlus2020/OpenSale/V239389280_IN_HETV_OnePlus_LatestNMLandingpage_En_GW_PC_1500x600_3._CB405565542_.jpg"
                        alt="4th slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="home__body">{prod_list_container}</div>
        </div>
    );
}

export default Home;
