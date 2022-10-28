import React from "react";
import cartToggle from "../../Cart-toggle";

function Cart(props) {
    return (
        <>
            <li>
                <a>
                    <></>
                    <i onClick={cartToggle} className="ri-shopping-cart-2-line"></i> <sup>{props.count}</sup>
                    {/* style={{color:'blue', background: 'aliceblue', borderRadius: '10px', padding: '4px'}} */}
                </a>
            </li>
        </>
    );
}

export default Cart;
