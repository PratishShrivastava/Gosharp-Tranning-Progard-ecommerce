import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Contactus from "./Components/Contactus";
import Aboutus from "./Components/Aboutus";
import Track from "./Components/Track";
import Register from "./Components/Register";

function App() {

    

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Navigate to="/login" /> } />
                <Route path="/home" element={ <Home /> } />
                {/* <Route path="/" element={ <Home /> } /> */}
                <Route path="/login" element={ <Login /> } />
                <Route path="/contactus" element={ <Contactus /> } />
                <Route path="/aboutus" element={ <Aboutus /> } />
                {/* <Route path="/track" element={ <Track /> } /> */}
                <Route path="/logout" element={ <></> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="*" element={<h1 style={{ textAlign: "center", height: "90vh", marginTop: "10%", color:"red" }}> Oops, Page Not Found.....</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
