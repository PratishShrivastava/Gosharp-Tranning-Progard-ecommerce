import React from "react";

function Card({ product, addToCart }) {
    return (
        <div className="flex-card">
            {product.map((productItem, productIndex) => {
                return (
                    <div>
                        <div className="product-item">
                            <img
                                src={productItem.url}
                                alt=""
                            />
                            <div className="product-item-cart">
                                <p className="Product-title">{productItem.name}</p>
                                <p className="Product-desc">{productItem.desc}</p>
                                <p className="Product-price">Rs. {productItem.price}</p>
                                <button onClick={() => addToCart(productItem)} className="Product-addCart">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;
