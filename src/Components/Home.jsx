import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./card/Card";
import CartList from "./card/CartList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "./navbar/Search";
// import Slider from "react-slick";

function Home() {
    const navigate = useNavigate();

    const [product, setProduct] = useState([
        {
            id: 1,
            url: "https://rukminim1.flixcart.com/image/312/312/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg",
            name: "T-Shirt",
            desc: "Men's White T-shirt",
            category: "",
            price: 1999,
        },
        {
            id: 2,
            url: "https://rukminim1.flixcart.com/image/312/312/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg",
            name: "Shirt",
            desc: "Men's Navy Blue Slim Fit Shirt",
            category: "",
            price: 599,
        },
        {
            id: 3,
            url: "https://rukminim1.flixcart.com/image/312/312/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg",
            name: "Jeans",
            desc: "Men's Blue Washed Jeans",
            category: "",
            price: 1057,
        },
        {
            id: 4,
            url: "https://rukminim1.flixcart.com/image/312/312/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg",
            name: "Sweatshirt",
            desc: "Men's Green Oversized Sweatshirt",
            category: "",
            price: 2000,
        },
        {
            id: 5,
            url: "https://rukminim1.flixcart.com/image/312/312/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg",
            name: "Joggers",
            desc: "Men's Black Joggers",
            category: "",
            price: 1499,
        },
        {
            id: 6,
            url: "https://rukminim1.flixcart.com/image/312/312/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg",
            name: "Hoodies",
            desc: "Sage Green Casual Cotton Hoodies",
            category: "",
            price: 1599,
        },
        {
            id: 7,
            url: "https://rukminim1.flixcart.com/image/312/312/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg",
            name: "Kurta",
            desc: "Olive Night Plus Size Fit Long Kurta",
            category: "",
            price: 800,
        },
        {
            id: 8,
            url: "https://rukminim1.flixcart.com/image/312/312/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg",
            name: "Sweater",
            desc: "Men's Olive Flat Knits Sweater",
            category: "",
            price: 1000,
        },
    ]);
    const photos = [
      {
        name: 'photo 1',
        url: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: 'photo 2',
        url: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: 'photo 3',
        url: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      },
      {
        name: 'photo 4',
        url: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      }
    ]

    useEffect(() => {
        if (!localStorage.getItem("User")) {
            navigate("/login");
        }
    });

    const [cart, setcart] = useState([]);

    const addToCart = (data) => {
        setcart([...cart, { ...data, quantity: 1 }]);
    };

    // const settings = {
    //     dots: true,
    //     fade: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     arrows: true,
    //     slidesToScroll: 1,
    //     className: "slides"
    // };

    return (
        <>
            <Navbar count={cart.length} />
            <CartList cart={cart} />
            <Card product={product} addToCart={addToCart} />
            <Footer />
        </>
    );
}

export default Home;
