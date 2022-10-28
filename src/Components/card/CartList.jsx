import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CartList({ cart }) {
    const [CART, setCART] = useState([]);
    const [isShown, setIsShown] = useState(true);

    const handleClick = event => {
        setIsShown(current => !current);
      };

    useEffect(() => {
        setCART(cart);
    }, [cart]);
    // const onClick = () => setShowResults(false)

    return (
        <div>
            {CART.map((cartItem, cartIndex) => {
                return (
                    <>
                        <div className="cart" id="cart" style={{display: isShown ? 'grid' : 'none'}}>
                            <div className="cart-item">
                                <div>
                                <h1>Cart</h1>
                                <button onClick={handleClick}>X</button>
                                </div>
                                <div className="cart-grid-item">
                                    <img
                                        src={cartItem.url}
                                        width={40}
                                        alt="d"
                                    />
                                    <span>{cartItem.name}</span>
                                    <button
                                        onClick={() => {
                                            const _CART = CART.map(
                                                (item, index) => {
                                                    return cartIndex === index
                                                        ? {
                                                              ...item,
                                                              quantity:
                                                                  item.quantity >
                                                                  0
                                                                      ? item.quantity -
                                                                        1
                                                                      : 0,
                                                          }
                                                        : item;
                                                }
                                            );
                                            setCART(_CART);
                                        }}
                                    >
                                        -
                                    </button>
                                    <span>{cartItem.quantity}</span>
                                    <button
                                        onClick={() => {
                                            const _CART = CART.map(
                                                (item, index) => {
                                                    return cartIndex === index
                                                        ? {
                                                              ...item,
                                                              quantity:
                                                                  item.quantity +
                                                                  1,
                                                          }
                                                        : item;
                                                }
                                            );
                                            setCART(_CART);
                                        }}
                                    >
                                        +
                                    </button>
                                    <span>
                                        Rs. {cartItem.price * cartItem.quantity}
                                    </span>
                                </div>
                                
                                <p><hr />Total : <span className="total-price">RS. 
                                {CART.map(
                                    (item) => item.price * item.quantity
                                ).reduce((total, value) => total + value, 0)}
                                </span><hr /></p>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default CartList;
