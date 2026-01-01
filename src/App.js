import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Categories from "./components/Categories";
import Products from "./components/Products";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import OrderStatus from "./pages/OrderStatus";

function App() {
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);

    // 🛒 Add to cart
    const addToCart = (product) => {
        const item = cart.find((i) => i.id === product.id);
        if (item) {
            setCart(
                cart.map((i) =>
                    i.id === product.id ? {...i, qty: i.qty + 1 } : i
                )
            );
        } else {
            setCart([...cart, {...product, qty: 1 }]);
        }
    };

    // ➕ Increase qty
    const increaseQty = (id) => {
        setCart(
            cart.map((i) =>
                i.id === id ? {...i, qty: i.qty + 1 } : i
            )
        );
    };

    // ➖ Decrease qty
    const decreaseQty = (id) => {
        setCart(
            cart
            .map((i) =>
                i.id === id ? {...i, qty: i.qty - 1 } : i
            )
            .filter((i) => i.qty > 0)
        );
    };

    const totalQty = cart.reduce((s, i) => s + i.qty, 0);

    return ( <
        BrowserRouter >

        { /* ✅ HEADER */ } <
        Header isLoggedIn = { false }
        setSearch = { setSearch }
        cartCount = { totalQty }
        cart = { cart }
        increaseQty = { increaseQty }
        decreaseQty = { decreaseQty }
        />

        { /* ✅ ROUTES */ } <
        Routes >
        <
        Route path = "/"
        element = { <
            >
            <
            Categories setCategory = { setCategory }
            /> <
            Products
            category = { category }
            search = { search }
            addToCart = { addToCart }
            /> <
            />
        }
        />

        <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/signup"
        element = { < Signup / > }
        /> <
        Route path = "/forgot-password"
        element = { < ForgotPassword / > }
        /> <
        Route path = "/cart"
        element = { < Cart cart = { cart }
            />} / >
            <
            Route path = "/payment"
            element = { < Payment / > }
            /> <
            Route path = "/order-status"
            element = { < OrderStatus / > }
            /> <
            /Routes>

            { /* ✅ FOOTER — MUST BE HERE */ } <
            Footer / >

            <
            /BrowserRouter>
        );
    }

    export default App;