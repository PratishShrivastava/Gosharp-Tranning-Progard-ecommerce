import React from "react";
import Categories from "./Categories";
import Logo from "./navbar/Logo";
import Links from "./navbar/Links";
import Search from "./navbar/Search";
import Cart from "./navbar/Cart";
import MyAccount from "./navbar/MyAccount";


function Navbar(props) {
    return (
        <>
            <header className="Navbar-header">
                <Logo />
                <Links />
                <div>
                    <ul className="nav_links">
                        <Search />
                        <Cart count={props.count} />
                        <MyAccount />
                    </ul>
                </div>
            </header>

            <Categories />
        </>
    );
}

export default Navbar;
