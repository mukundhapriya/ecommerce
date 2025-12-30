import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";

function Header({ setSearch, cartCount }) {
    const [showLocation, setShowLocation] = useState(false);
    const [location, setLocation] = useState("Detect Location");

    const detectLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation not supported in this browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            () => {
                setLocation("Location detected ✅");
                setShowLocation(false);
            },
            () => {
                alert("Location access denied");
            }
        );
    };

    return ( <
        >
        <
        header className = "header" >

        { /* LEFT : LOGO + DELIVERY */ } <
        div className = "left" >
        <
        img src = { logo }
        alt = "Mart Logo"
        className = "logo" / >

        <
        div className = "delivery"
        onClick = {
            () => setShowLocation(true) } >
        <
        span className = "delivery-title" > Delivery in 10 mins < /span> <
        span className = "delivery-location" > { location }▼ <
        /span> <
        /div> <
        /div>

        { /* CENTER : SEARCH */ } <
        div className = "search-box" >
        <
        input type = "text"
        placeholder = "Search products..."
        onChange = {
            (e) => setSearch(e.target.value) }
        /> <
        /div>

        { /* RIGHT : LOGIN / SIGNUP / CART */ } <
        div className = "right" >
        <
        Link to = "/login"
        className = "login-btn" > Login < /Link> <
        Link to = "/signup"
        className = "login-btn" > Signup < /Link>

        <
        div className = "cart" > 🛒 < span > { cartCount } < /span> <
        /div> <
        /div>

        <
        /header>

        { /* 📍 LOCATION POPUP */ } {
            showLocation && ( <
                div className = "location-overlay" >
                <
                div className = "location-popup" >
                <
                h3 > 📍Detect your location < /h3> <
                p > Allow location access to get faster delivery < /p>

                <
                button className = "detect-btn"
                onClick = { detectLocation } >
                Detect Location <
                /button>

                <
                button className = "close-btn"
                onClick = {
                    () => setShowLocation(false) } >
                Cancel <
                /button> <
                /div> <
                /div>
            )
        } <
        />
    );
}

export default Header;