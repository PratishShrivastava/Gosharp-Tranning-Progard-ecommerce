import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MyAccount() {
    const navigate = useNavigate();
    let user = localStorage.getItem("User");
    // console.log(user);
    const Logout = () => {
        localStorage.clear();
        navigate('/login');
        // console.log("logout");
    }
    return (
        <>
            <li>
                <div className="dropdown">
                    <span>My Account<i className="ri-arrow-down-s-line"></i></span>
                    <div className="dropdown-content">
                        <div>

                            {(user !== "login") ? (
                                <p><Link to="/login">Login/signup</Link></p>
                             ) : ( 
                                <p onClick={Logout}>Logout</p> 
                             )}
                        </div>
                        <div>
                            {/* <p><Link to="/track">Track Orders</Link></p> */}
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}

export default MyAccount;
