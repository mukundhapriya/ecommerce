import React from "react";
import "./Categories.css";

function Categories({ setCategory }) {
    const categories = ["All", "Vegetables", "Fruits", "Dairy"];

    return ( <
        div style = {
            { textAlign: "center", margin: 20 } } > {
            categories.map((cat) => ( <
                button key = { cat }
                onClick = {
                    () => setCategory(cat) }
                style = {
                    { margin: 10, padding: "8px 15px" } } >
                { cat } <
                /button>
            ))
        } <
        /div>
    );
}

export default Categories;