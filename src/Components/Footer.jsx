import React from "react";
import Logos from "./images/Logo/1.png";

function Footer() {
    return (
        <>
            <footer class="footer-distributed">
                <div class="footer-left">
                    <img src={Logos} />
                    <h3>
                        About<span>MaaG</span>
                    </h3>

                    <p class="footer-links">
                        <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">
                        © 2019 CopyRight
                    </p>
                </div>

                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p>
                            <span>
                                309 - Rupa Solitaire, Bldg. No. A - 1, Sector -
                                1
                            </span>
                            Mahape, Mumbai - 400710
                        </p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+91 22-27782183</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p>
                            <a href="mailto:support@eduonix.com">
                                support@eduonix.com
                            </a>
                        </p>
                    </div>
                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About the company</span>
                        We offer high-quality fashion products for all men with the best shopping experience.
                    </p>
                    <div class="footer-icons">
                        <a href="#">
                            <i class="ri-facebook-circle-fill"></i>
                        </a>
                        <a href="#">
                            <i class="ri-twitter-fill"></i>
                        </a>
                        <a href="#">
                            <i class="ri-instagram-fill"></i>
                        </a>
                        <a href="#">
                            <i class="ri-linkedin-box-fill"></i>
                        </a>
                        <a href="#">
                            <i class="ri-youtube-fill"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
