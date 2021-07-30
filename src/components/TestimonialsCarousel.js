import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";

// avatar import 
import avatar1 from "../images/avatars/avatar1.png";
import avatar2 from "../images/avatars/avatar2.jpg";
import avatar3 from "../images/avatars/avatar3.png";
import avatar4 from "../images/avatars/avatar4.png";
import avatar5 from "../images/avatars/avatar5.png";

const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoplay={true}
            interval={3000}
        >
            <>
                <img src={avatar1} alt="1" />
                <div className="myCarousel">
                    <h3>gobella</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt qui iste blanditiis quos? Corporis quaerat unde praesentium nemo facilis?</p>
                </div>    
            </>
            <>
                <img src={avatar2} alt="1" />
                <div className="myCarousel">
                    <h3>roykimm</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt qui iste blanditiis quos? Corporis quaerat unde praesentium nemo facilis?</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="1" />
                <div className="myCarousel">
                    <h3>mancle</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt qui iste blanditiis quos? Corporis quaerat unde praesentium nemo facilis?</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="1" />
                <div className="myCarousel">
                    <h3>juju</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt qui iste blanditiis quos? Corporis quaerat unde praesentium nemo facilis?</p>
                </div>
            </>
            <>
                <img src={avatar5} alt="1" />
                <div className="myCarousel">
                    <h3>goroy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt qui iste blanditiis quos? Corporis quaerat unde praesentium nemo facilis?</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
