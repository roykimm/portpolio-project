import React from 'react'
import author from '../images/me.jpg';

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xs-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="내사진..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                    <h1 className="about-heading">About me</h1>
                    <p>이름 : 김명훈</p>
                    <p>생년월일 : 1988.02.08</p>
                    <p>생년월일 : 1988.02.08</p>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutMe
