import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);

    // ➕ Add to cart
    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ?
                    {...item, qty: item.qty + 1 } :
                    item
                )
            );
        } else {
            setCart([...cart, {...product, qty: 1 }]);
        }
    };

    // ➕ Increase quantity
    const increaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id ? {...item, qty: item.qty + 1 } : item
            )
        );
    };

    // ➖ Decrease quantity
    const decreaseQty = (id) => {
        setCart(
            cart
            .map((item) =>
                item.id === id ? {...item, qty: item.qty - 1 } : item
            )
            .filter((item) => item.qty > 0)
        );
    };

    // 🛒 Total quantity for header
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    return ( <
        BrowserRouter >
        <
        Header setSearch = { setSearch }
        cartCount = { totalQty }
        />

        <
        Routes > { /* HOME */ } <
        Route path = "/"
        element = { <
            >
            <
            Categories setCategory = { setCategory }
            />

            <
            Products
            category = { category }
            search = { search }
            addToCart = { addToCart }
            />

            <
            h3 style = {
                { marginLeft: 20 } } > Cart Items < /h3>

            {
                cart.length === 0 && ( <
                    p style = {
                        { marginLeft: 20 } } > Cart is empty < /p>
                )
            }

            {
                cart.map((item) => ( <
                    div key = { item.id }
                    style = { styles.cartItem } >
                    <
                    span > { item.name } < /span>

                    <
                    div style = { styles.qtyBox } >
                    <
                    button onClick = {
                        () => decreaseQty(item.id) } > - < /button> <
                    span > { item.qty } < /span> <
                    button onClick = {
                        () => increaseQty(item.id) } > + < /button> <
                    /div>

                    <
                    span > ₹{ item.price * item.qty } < /span> <
                    /div>
                ))
            } <
            />
        }
        />

        { /* LOGIN */ } <
        Route path = "/login"
        element = { < Login / > }
        />

        { /* SIGNUP */ } <
        Route path = "/signup"
        element = { < Signup / > }
        />

        { /* FORGOT PASSWORD */ } <
        Route path = "/forgot-password"
        element = { < ForgotPassword / > }
        /> <
        /Routes> <
        /BrowserRouter>
    );
}

const styles = {
    cartItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 20px",
        padding: 10,
        background: "#fff",
        borderRadius: 8,
    },
    qtyBox: {
        display: "flex",
        alignItems: "center",
        gap: 10,
    },
};

export default App;