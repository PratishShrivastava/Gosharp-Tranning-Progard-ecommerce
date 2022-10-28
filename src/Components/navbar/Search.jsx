import React from "react";
import { useState } from "react";
import Data from "../../Products";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <li>
                <a>
                    <input type="text" placeholder="Search" />
                    <span className="search-btn"><i class="ri-search-line" onChange={(event)=>{
                        setSearchTerm(event.target.value);
                    }}></i></span>
                </a>
                {Data.filter}
            </li>
        </>
    );
}

export default Search;
