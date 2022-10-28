import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Aboutus() {
    return (
        <>
            <Navbar />
            <div className="about">
                <div className="aboutBottom">
                    <h1>ABOUT US</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent pulvinar lectus lectus, sed commodo lorem
                        efficitur vitae. Phasellus pulvinar hendrerit tincidunt.
                        Aliquam scelerisque lacus id auctor fringilla. Donec
                        semper tellus non feugiat sagittis. In auctor odio et
                        massa rhoncus rutrum. Pellentesque fringilla dui ut nibh
                        tincidunt fringilla. Integer est neque, facilisis in
                        massa non, imperdiet fringilla nunc. Nam dapibus
                        bibendum dolor, id pharetra ex. Mauris vestibulum eget
                        justo et porta. Nunc justo dui, aliquet non vehicula et,
                        ultrices vel sapien. Maecenas dictum euismod risus,
                        vitae malesuada sem dictum id. Nunc consequat viverra
                        tristique. Praesent scelerisque erat vel volutpat
                        laoreet. Nullam feugiat odio eget facilisis pretium.
                        Curabitur lorem augue, suscipit sit amet hendrerit quis,
                        vulputate in mauris. Aliquam interdum lectus quis lectus
                        imperdiet rhoncus. Nulla est magna, congue nec ipsum
                        vel, rutrum semper lorem. Nam et varius dolor. Proin at
                        mollis augue. Cras consectetur tincidunt commodo.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Aboutus;
