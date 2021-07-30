import React from 'react'
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>my clients</h1>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCarousel />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
