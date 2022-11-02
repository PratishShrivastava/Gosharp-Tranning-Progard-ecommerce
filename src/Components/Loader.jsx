import React from "react";
import { BrokenCirclesLoader } from "react-loaders-kit";
// import Typed from "react-typed";

function Loader() {

  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#FAF7FF", "#f42e00", "#042549", "#8685EF", "#aa99ff"],
  };

  return (
    <div className="loader">
        <BrokenCirclesLoader {...loaderProps} />
        
        {/* <Typed
          className="loader-text"
          strings={["Loading..."]}
          typeSpeed={60}
          backSpeed={0}
        /> */}
    </div>
  );
}

export default Loader;