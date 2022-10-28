import React from 'react';
import Logos from "../images/Logo/1.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
        <Link to="/"><img src={Logos} alt="Logo" width="100px" /></Link>
    </>
  )
}

export default Logo;