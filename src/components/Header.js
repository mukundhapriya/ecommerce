import { Link } from "react-router-dom";

function Header({ setSearch, cartCount }) {
    return ( <
        header className = "header" >
        <
        h2 className = "logo" >
        MART < span > < /span> < /
        h2 >

        <
        input className = "search"
        type = "text"
        placeholder = "Search products..."
        onChange = {
            (e) => setSearch(e.target.value)
        }
        />

        <
        div className = "header-right" >
        <
        Link to = "/login"
        className = "login-btn" >
        Login <
        /Link>

        <
        Link to = "/signup"
        className = "login-btn" >
        Signup <
        /Link>

        <
        div className = "cart" > 🛒 < span > { cartCount } < /span> < /
        div > <
        /div> < /
        header >
    );
}

export default Header;