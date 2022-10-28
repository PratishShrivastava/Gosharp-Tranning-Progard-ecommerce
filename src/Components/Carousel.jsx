import React from "react";

function Carousel() {
    return (
        <>
            <section aria-label="Newest Photos">
                <div className="carousel" data-carousel>
                    <button
                        className="carousel-button prev"
                        data-carousel-button="prev"
                    >
                        &#8656;
                    </button>
                    <button
                        className="carousel-button next"
                        data-carousel-button="next"
                    >
                        &#8658;
                    </button>
                    <ul data-slides>
                        <li className="slide" data-active>
                            <img
                                src="https://source.unsplash.com/78A265wPiO4"
                                alt="Nature Image #1"
                            />
                        </li>
                        <li className="slide">
                            <img
                                src="https://source.unsplash.com/eOpewngf68w"
                                alt="Nature Image #2"
                            />
                        </li>
                        <li className="slide">
                            <img
                                src="https://source.unsplash.com/ndN00KmbJ1c"
                                alt="Nature Image #3"
                            />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Carousel;
