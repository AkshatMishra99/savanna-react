let createProduct = function (id, title, price, rating, imgset) {
    this.id = id;
    this.alt = title;
    this.title = title;
    this.price = price;
    this.rating = rating;
    this.imgset = imgset;
};
export const initialState = {
    basket: {},
    wishlist: {},
    user: null,
    inventory: {
        category: {
            Smartphones: [
                new createProduct(101, "One Plus 7T Pro", 43999, 4, [
                    "https://images-na.ssl-images-amazon.com/images/I/61FRLa8IFTL._SX425_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/61waHuOP9FL._SX425_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/611sQqu6waL._SX425_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/61HeCTgykFL._SX425_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/61EsmyImO5L._SX425_.jpg",
                ]),

                new createProduct(
                    102,

                    "Apple iPhone 11 (64GB) - Black",
                    66990,
                    5,
                    [
                        "https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SX466_.jpg",

                        "https://images-na.ssl-images-amazon.com/images/I/51Ht7WrEaVL._SX466_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/51NfeIst2lL._SX466_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/51iNt0u3eaL._SX466_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/71Rv6QepJJL._SX466_.jpg",
                    ]
                ),
                new createProduct(
                    103,

                    "Samsung Galaxy Note10 Lite (Aura Glow, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",

                    37990,
                    4,
                    [
                        "https://images-na.ssl-images-amazon.com/images/I/71T0KJFxCHL._SY445_.jpg",

                        "https://images-na.ssl-images-amazon.com/images/I/71SFiUok-NL._SY445_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/513iLmPNm9L._SX466_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/71gljD6pGtL._SY445_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/5145YtOLqyL._SY445_.jpg",
                    ]
                ),
                new createProduct(
                    104,

                    "OPPO A5S (Black, 3GB RAM, 32GB Storage) With No Cost EMI/Additional Exchange Offers",

                    8990,
                    4,
                    [
                        "https://images-na.ssl-images-amazon.com/images/I/71ZU4VsevqL._SX425_.jpg",

                        "https://images-na.ssl-images-amazon.com/images/I/81O05pBwysL._SX425_.jpg",
                    ]
                ),
            ],
            Mens: [
                new createProduct(
                    201,

                    "CURIOUS LIFESTYLE Attitude Tshirt for Men| Back Printed T Shirts | Slogen T Shirt | Round Neck | Half Sleeves | Cotton",

                    398,
                    3,
                    [
                        "https://images-na.ssl-images-amazon.com/images/I/61Ul1ol1agL._UX679_.jpg",

                        "https://images-na.ssl-images-amazon.com/images/I/61coo03RY2L._UX679_.jpg",
                    ]
                ),
                new createProduct(
                    202,
                    "U.S. Polo Assn. Men's Solid Regular Fit T-Shirt",

                    539,
                    4,
                    [
                        "https://images-na.ssl-images-amazon.com/images/I/81MCGX3ewQL._UX466_.jpg",

                        "https://images-na.ssl-images-amazon.com/images/I/81CYf0yagnL._UX466_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/91uvk-Dv2WL._UX466_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/91uvk-Dv2WL._UX466_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/91uvk-Dv2WL._UX466_.jpg",
                    ]
                ),
                new createProduct(
                    203,
                    "IndoPrimo Men's Regular Fit Casual Shirt",
                    699,
                    4,
                    [
                        "https://images-na.ssl-images-amazon.com/images/I/51PE8Aj%2BaAL._UY550_.jpg",

                        "https://images-na.ssl-images-amazon.com/images/I/41L2AGBEMFL.jpg",
                    ]
                ),
                new createProduct(
                    204,
                    "United Colors of Benetton Men's Solid Slim fit Casual Shirt",
                    518,
                    4,
                    [
                        "https://images-na.ssl-images-amazon.com/images/I/71%2BoRLqBqRL._UY550_.jpg",

                        "https://images-na.ssl-images-amazon.com/images/I/71B%2BuQ5jdDL._UY550_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/81EE9zjcDsL._UY550_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/81EE9zjcDsL._UY550_.jpg",
                    ]
                ),
            ],
            "Daily-essentials": [
                new createProduct(
                    301,
                    "Bragg Organic Raw Apple Cider Vinegar - 473 ml",
                    526,
                    4,
                    [
                        "https://images-na.ssl-images-amazon.com/images/I/61RtPSxld-L._SX522_.jpg",

                        "https://images-na.ssl-images-amazon.com/images/I/8189%2BGv-ZLL._SY550_.jpg",
                    ]
                ),
                new createProduct(
                    302,
                    "Nestlé CEREGROW Fortified Multigrain Cereal with Milk and Fruits, 300g Bag-In-Box Pack",
                    249,
                    4,
                    [
                        "https://images-na.ssl-images-amazon.com/images/I/81v37rha2FL._SX425_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/81f-n1Zn8%2BL._SX425_.jpg",
                    ]
                ),
                new createProduct(
                    303,
                    "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate), Primary Source Isolate",
                    2773,
                    4,
                    [
                        "https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SY450_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/813lP09FCbL._SX425_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/813lP09FCbL._SX425_.jpg",
                    ]
                ),
                new createProduct(
                    304,
                    "Surf Excel Matic Liquid Detergent - 2 Litre Pouch (Front Load)",
                    340,
                    4,
                    [
                        "https://images-na.ssl-images-amazon.com/images/I/71kLxYymGNL._SX522_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/71V6s7-CVGL._SX425_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/71V6s7-CVGL._SX425_.jpg",
                        "https://images-na.ssl-images-amazon.com/images/I/71V6s7-CVGL._SX425_.jpg",
                    ]
                ),
            ],
        },
    },
};

export const getBasketTotal = (basket) => {
    let tot = 0;
    for (let i in basket) {
        tot += basket[i][0].price * basket[i][1];
    }
    return tot;
};
export const calculateItems = (basket) => {
    let c = 0;
    for (let i in basket) {
        c += basket[i][1];
    }
    return c;
};
const reducer = (state, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            let newWishlist = { ...state.wishlist };
            if (!(action.item.id in newWishlist)) {
                newWishlist[action.item.id] = { ...action.item };
            }
            return {
                ...state,
                wishlist: { ...newWishlist },
            };
        case "REMOVE_FROM_WISHLIST":
            let newWishlist2 = { ...state.wishlist };
            if (action.item.id in newWishlist2) {
                delete newWishlist2[action.item.id];
            }
            return {
                ...state,
                wishlist: { ...newWishlist2 },
            };
        case "ADD_TO_BASKET":
            let newBasket = { ...state.basket };
            if (action.item.id in newBasket) {
                newBasket[action.item.id][1]++;
            } else {
                newBasket[action.item.id] = [{ ...action.item }, 1];
            }
            return {
                ...state,
                basket: { ...newBasket },
            };
        case "REMOVE_FROM_BASKET":
            let newBasket2 = {};
            newBasket2 = { ...state.basket };
            if (action.item.id in newBasket2) {
                if (action.count === 0) delete newBasket2[action.item.id];
                else newBasket2[action.item.id][1] = action.count;
            } else {
                console.warn(
                    `Cant remove product with id ${action.item.id} as its not in basket. `
                );
            }
            console.log(newBasket2);
            return {
                ...state,
                basket: { ...newBasket2 },
            };
        case "UPDATE_FROM_BASKET":
            let newBasket3 = { ...state.basket };
            if (action.item.id in newBasket3) {
                delete newBasket3[action.item.id];
            } else {
                console.warn(
                    `Cant remove product with id ${action.item.id} as its not in basket. `
                );
            }
            return {
                ...state,
                basket: { ...newBasket3 },
            };

        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};
export default reducer;
