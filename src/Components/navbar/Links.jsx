import React from "react";
import { NavLink } from "react-router-dom";

function Links() {
    return (
        <>
            <nav className="nav">
                <ul className="nav_links">
                    <li>
                        {/* <NavLink to="/product"> */}
                            <p>Products</p>
                            {/* </NavLink> */}
                    </li>
                    <li>
                        <NavLink to="/contactus">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutus">About Us</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Links;
