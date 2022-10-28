import React from "react";

function Categories() {
    const Category = ["shirt", "t-shirt", "jeans", "Sweatshirt", "Joggers", "Hoodies", "Kurta", "Sweater"];
    return (
        <>
            <header>
                <nav className="c-nav">
                    <ul className="c-nav_links">
                        <li>{Category[0]}</li>
                        <li>{Category[1]}</li>
                        <li>{Category[2]}</li>
                        <li>{Category[3]}</li>
                        <li>{Category[4]}</li>
                        <li>{Category[5]}</li>
                        <li>{Category[6]}</li>
                        <li>{Category[7]}</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Categories;
