import productsData from "../data/products";

function Products({ category, search = "", addToCart }) {
    const filtered = productsData.filter((p) => {
        const cMatch = category === "All" || p.category === category;
        const sMatch = p.name.toLowerCase().includes(search.toLowerCase());
        return cMatch && sMatch;
    });

    return ( <
        div className = "products" > {
            filtered.map((p) => ( <
                div key = { p.id }
                className = "product-card" >
                <
                div className = "product-img" > 🥦 < /div> <
                h4 > { p.name } < /h4> <
                p > ₹{ p.price } < /p> <
                button onClick = {
                    () => addToCart(p) } > Add to Cart < /button> <
                /div>
            ))
        } <
        /div>
    );
}

export default Products;