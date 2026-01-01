import productsData from "../data/products";
import "./Products.css"; // ✅ make sure idhi import chesaru

function Products({ category, search = "", addToCart }) {

    const filteredProducts = productsData.filter(
        (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || p.category === category)
    );

    return ( <
        div className = "products-grid" > {
            filteredProducts.map((p) => ( <
                div key = { p.id }
                className = "product-card" >

                <
                div className = "product-img" > 🥦 < /div>

                <
                h4 className = "product-name" > { p.name } < /h4>

                <
                p className = "product-price" > ₹{ p.price } < /p>

                <
                button className = "add-btn"
                onClick = {
                    () => addToCart(p) } >
                Add to Cart <
                /button>

                <
                /div>
            ))
        } <
        /div>
    );
}

export default Products;