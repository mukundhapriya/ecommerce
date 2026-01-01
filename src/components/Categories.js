import React, { useState } from "react";
import "./Categories.css";

function Categories({ setCategory }) {
    const [active, setActive] = useState("All");

    const categories = ["All", "Vegetables", "Fruits", "Dairy"];

    const handleClick = (cat) => {
        setActive(cat);
        setCategory(cat);
    };

    return ( <
        div className = "category-container" > {
            categories.map((cat) => ( <
                button key = { cat }
                className = { `category-btn ${active === cat ? "active" : ""}` }
                onClick = {
                    () => handleClick(cat) } >
                { cat } <
                /button>
            ))
        } <
        /div>
    );
}

export default Categories;