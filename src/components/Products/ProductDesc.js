import React from "react";
import "./ProductDesc.css";
import { Link, useLocation } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
import { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
function ProductDesc() {
    let [index, setIndex] = useState();
    const [state, dispatch] = useStateValue();
    let location = useLocation();
    const item = location?.state;
    let [imgsrc, setImg] = useState(item?.imgset[0]);
    if (item != null) {
        const addToBasket = () => {
            //dispatch the item into the data layer
            console.log("basket pressed");
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id: item?.id,
                    title: item?.title,
                    image: item?.imgset[0],
                    price: item?.price,
                    rating: item?.rating,
                },
            });
        };

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };
        const changeIndex = (e) => {
            console.log(e.target);
            setImg(e.target.src);
        };
        let thumbItems = [];
        for (let img in item?.imgset) {
            thumbItems.push(
                <li id={img} className="thumb-item" onClick={changeIndex}>
                    <img src={item?.imgset[img]} className="thumb-img" />
                </li>
            );
        }
        let carouselItem = [];
        for (let img in item?.imgset) {
            carouselItem.push(
                <Carousel.Item className="prod-carousel">
                    <div className="prod-img-container">
                        <img
                            src={item?.imgset[img]}
                            className="prod-carousel-img"
                        />
                    </div>
                </Carousel.Item>
            );
        }
        return (
            <div className="prod-desc">
                <div className="prod-desc-container">
                    <div className="prod-thumb">
                        <ul className="thumb-container">{thumbItems}</ul>
                    </div>
                    <div className="prod-image-main">
                        <div className="inner-image">
                            <img src={imgsrc}></img>
                        </div>
                        <Carousel className="product-carousel" interval={null}>
                            {carouselItem}
                        </Carousel>
                    </div>
                    <div className="prod-details">
                        <h1>{item?.title}</h1>
                        <div className="prod-price">
                            <span className="price">Price:</span>₹
                            <span className="price-value">{item?.price}</span>
                        </div>
                        <div className="prod-rating">
                            {Array(item?.rating)
                                .fill()
                                .map((_, i) => (
                                    <p>⭐</p>
                                ))}
                        </div>
                        <Button variant="primary" onClick={addToBasket}>
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        );
    } else return <div className="prod-desc"></div>;
}

export default ProductDesc;
