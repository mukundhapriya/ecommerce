import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/images/logo.png";
import productsData from "../data/products";
import CartModal from "./CartModal";

function Header({
    isLoggedIn = false,
    setSearch,
    cartCount,
    cart,
    increaseQty,
    decreaseQty,
}) {
    const navigate = useNavigate();

    /* 🛒 Cart */
    const [showCart, setShowCart] = useState(false);

    /* 📍 Location */
    const [location, setLocation] = useState("Select location");
    const [showLocationModal, setShowLocationModal] = useState(false);
    const [locationSearch, setLocationSearch] = useState("");

    /* 🔍 Product search */
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("deliveryLocation");
        if (saved) setLocation(saved);
    }, []);

    /* 📍 LIVE LOCATION (Reverse Geocode) */
    const getLiveLocation = () => {
        navigator.geolocation.getCurrentPosition(async(pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;

            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            );
            const data = await res.json();

            const area =
                data.address.suburb ||
                data.address.village ||
                data.address.hamlet ||
                data.address.locality ||
                "";

            const city =
                data.address.city ||
                data.address.town ||
                data.address.county ||
                data.address.state_district ||
                "";

            const finalLocation =
                area && city ? `${area}, ${city}` : area || city || "Current Location";

            setLocation(finalLocation);
            localStorage.setItem("deliveryLocation", finalLocation);
            setShowLocationModal(false);
        });
    };

    /* 🔍 Product suggestions */
    const suggestions = productsData
        .filter((p) =>
            p.name.toLowerCase().includes(searchText.toLowerCase())
        )
        .slice(0, 5);

    /* ✅ UPDATED FILTERED LOCATIONS (AS REQUESTED) */
    const locations = [
        "Kurnool",
        "Hyderabad",
        "Bangalore",
        "Chennai",
        "Vijayawada",
    ];

    const filteredLocations =
        locationSearch.trim() === "" ?
        locations :
        locations.filter((loc) =>
            loc.toLowerCase().includes(locationSearch.toLowerCase())
        );

    return ( <
        > { /* ================= HEADER ================= */ } <
        header className = "header" > { /* LEFT */ } <
        div className = "left" >
        <
        img src = { logo }
        alt = "Logo"
        className = "logo" / >
        <
        /div>

        { /* CENTER SEARCH */ } <
        div className = "search-box" >
        <
        input type = "text"
        placeholder = "Search products"
        value = { searchText }
        onChange = {
            (e) => {
                setSearchText(e.target.value);
                setSearch(e.target.value);
            }
        }
        />

        {
            searchText && ( <
                div className = "suggestions" > {
                    suggestions.map((item) => ( <
                        div key = { item.id }
                        onClick = {
                            () => {
                                setSearchText(item.name);
                                setSearch(item.name);
                            }
                        } >
                        { item.name } <
                        /div>
                    ))
                } <
                /div>
            )
        } <
        /div>

        { /* RIGHT */ } <
        div className = "right" >
        <
        div className = "delivery"
        onClick = {
            () => setShowLocationModal(true) } >
        <
        span className = "delivery-title" > Delivery in 10 mins < /span> <
        span className = "delivery-location" > { location } < /span> <
        /div>

        {
            !isLoggedIn && ( <
                >
                <
                button className = "login-btn"
                onClick = {
                    () => navigate("/login") } >
                Login <
                /button> <
                button className = "signup-btn"
                onClick = {
                    () => navigate("/signup") } >
                Signup <
                /button> <
                />
            )
        }

        <
        span className = "cart"
        onClick = {
            () => setShowCart(true) } > 🛒{ cartCount } <
        /span> <
        /div> <
        /header>

        { /* ================= CART MODAL ================= */ } {
            showCart && ( <
                CartModal cart = { cart }
                increaseQty = { increaseQty }
                decreaseQty = { decreaseQty }
                onClose = {
                    () => setShowCart(false) }
                onCheckout = {
                    () => {
                        setShowCart(false);
                        navigate("/payment");
                    }
                }
                />
            )
        }

        { /* ================= LOCATION MODAL ================= */ } {
            showLocationModal && ( <
                div className = "overlay"
                onClick = {
                    () => setShowLocationModal(false) } >
                <
                div className = "location-modal"
                onClick = {
                    (e) => e.stopPropagation() } >
                <
                h3 > Select delivery location < /h3>

                <
                input type = "text"
                placeholder = "Search location"
                value = { locationSearch }
                onChange = {
                    (e) => setLocationSearch(e.target.value) }
                onKeyDown = {
                    (e) => {
                        if (e.key === "Enter" && locationSearch.trim()) {
                            setLocation(locationSearch);
                            localStorage.setItem(
                                "deliveryLocation",
                                locationSearch
                            );
                            setShowLocationModal(false);
                            setLocationSearch("");
                        }
                    }
                }
                />

                <
                button className = "use-location"
                onClick = { getLiveLocation } > 📍Use Current Location <
                /button>

                { /* ✅ FILTERED LOCATIONS USED HERE */ } <
                ul > {
                    filteredLocations.map((loc) => ( <
                        li key = { loc }
                        onClick = {
                            () => {
                                setLocation(loc);
                                localStorage.setItem(
                                    "deliveryLocation",
                                    loc
                                );
                                setShowLocationModal(false);
                                setLocationSearch("");
                            }
                        } >
                        📍{ loc } <
                        /li>
                    ))
                } <
                /ul>

                { /* OPTIONAL UX HINT */ } {
                    filteredLocations.length === 0 &&
                        locationSearch && ( <
                            p style = {
                                { fontSize: "12px", color: "#888" } } >
                            Press Enter to use“ { locationSearch }” <
                            /p>
                        )
                }

                <
                button className = "close-btn"
                onClick = {
                    () => setShowLocationModal(false) } >
                Close <
                /button> <
                /div> <
                /div>
            )
        } <
        />
    );
}

export default Header;