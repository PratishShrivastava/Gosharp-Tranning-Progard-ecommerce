import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = (e) => {
        e.preventDefault();

        Login(details);
    };

    return (
        <>
            <div class="login-form">
                <form onSubmit={submitHandler}>
                    <h1>Login</h1>
                    {(error !== "") ? ( <div className="error">{error}</div>) : "" }
                    <div class="content">
                        <div class="input-field">
                            <input
                                type="email"
                                placeholder="Email"
                                autocomplete="off"
                                required
                                onChange={(e) =>
                                    setDetails({
                                        ...details,
                                        email: e.target.value,
                                    })
                                }
                                value={details.email}
                            />
                        </div>
                        <div class="input-field">
                            <input
                                type="password"
                                placeholder="Password"
                                autocomplete="off"
                                required
                                onChange={(e) =>
                                    setDetails({
                                        ...details,
                                        password: e.target.value,
                                    })
                                }
                                value={details.password}
                            />
                        </div>
                        <a class="link">
                            Forgot Your Password?
                        </a>
                    </div>
                    <div class="action">
                        <button><Link to="/register">Register</Link></button>
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
