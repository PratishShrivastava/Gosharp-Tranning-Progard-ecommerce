import React, { useEffect, useState } from "react";

function RegisterForm() {
    // const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
    //   console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        // console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (!PWD_REGEX.test(values.password)) {
        errors.password = "Password is not valid format!";
      } 
      return errors;
    };
    return (
        <>
            <div class="login-form">
                <form onSubmit={handleSubmit}>
                    <h1>Signup</h1>
                    <div class="content">
                        <div class="input-field">
                            <input
                                name="username"
                                placeholder="Username"
                                value={formValues.username}
                                autocomplete="off"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.username}</p>
                        <div class="input-field">
                        
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.email}</p>
                        <div class="input-field">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                                autocomplete="off"
                                required
                            />
                        </div>
                        <p>{formErrors.password}</p>
                    </div>
                    <div class="action">
                        <button>
                            Login
                            {/* <Link to="/register">Register</Link> */}
                        </button>
                        <button>Register</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default RegisterForm;
