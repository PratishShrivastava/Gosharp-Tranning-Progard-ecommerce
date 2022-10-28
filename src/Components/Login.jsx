import React, {useState} from "react";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"

function Login() {
  const loginUser = {
    email: "pratish@gmail.com",
    password: "password"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const Login = details => {
    console.log(details);
    if( details.email === loginUser.email && details.password === loginUser.password){
      console.log("Log in");
      setUser({
        email: details.email,
        password: details.password
      });
    }else{
      console.log("detail do not match");
      setError("detail do not match");
    }
  }

  const SucessLogin = () => {
    localStorage.setItem("User" , "login")
    navigate("/home");
  }

  // const Logout = () => {
  //   setUser({
  //     email: "",
  //     password: ""
  //   }); 
  // }
  
    return (
        <>
            <Navbar />
            {(user.email !== "") ? (
                <div>
                  {SucessLogin()}
                  {/* <button onClick={Logout}>Logout</button> */}
                  </div>
            ) : (
              <LoginForm Login={Login} error={error} />
            )}
            
            <Footer />
        </>
    );
}

export default Login;
