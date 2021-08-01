import React from 'react'
import pj1 from "../images/buddha.jpg"
import pj2 from "../images/nature.jpg"
import pj3 from "../images/sunrise.jpg"
import pj4 from "../images/colorful.jpg"
// font awesome import;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    const openPopupboxPj1 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={pj1} alt="1"/>
                <p>dfdfdfdfdfd</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("http://gobella.kr:3000", "_blank")}>http://gobella.kr:3000</a>
                <br />
                <b>github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/roykimm/django-blog")}>https://github.com/roykimm/django-blog</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const PopupboxConfigPj1 = {
        titleBar : {
            enable : true,
            text : "netflix clone project"
        },
        fadeIn : true,
        fadeInSpeed : 1000,
    }

    const openPopupboxPj2 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={pj2} alt="1"/>
                <p>dfdfdfdfdfd</p>
                <b>github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/roykimm/django-blog")}>https://github.com/roykimm/django-blog</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const PopupboxConfigPj2 = {
        titleBar : {
            enable : true,
            text : "netflix clone project"
        },
        fadeIn : true,
        fadeInSpeed : 1000,
    }

    const openPopupboxPj3 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={pj2} alt="1"/>
                <p>dfdfdfdfdfd</p>
                <b>github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/roykimm/django-blog")}>https://github.com/roykimm/django-blog</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const PopupboxConfigPj3 = {
        titleBar : {
            enable : true,
            text : "netflix clone project"
        },
        fadeIn : true,
        fadeInSpeed : 1000,
    }

    const openPopupboxPj4 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={pj2} alt="1"/>
                <p>dfdfdfdfdfd</p>
                <b>github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/roykimm/django-blog")}>https://github.com/roykimm/django-blog</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const PopupboxConfigPj4 = {
        titleBar : {
            enable : true,
            text : "netflix clone project"
        },
        fadeIn : true,
        fadeInSpeed : 1000,
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                {/* - */}
                <div className="image-box-wrapper row justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className="portfolio-image-box" onClick={openPopupboxPj1}>
                            <img className="portfolio-image" src={pj1} alt="프로젝트1" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                {/* - */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="portfolio-image-box" onClick={openPopupboxPj2}>
                            <img className="portfolio-image" src={pj2} alt="프로젝트2"/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                {/* - */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="portfolio-image-box" onClick={openPopupboxPj3}>
                            <img className="portfolio-image" src={pj3} alt="프로젝트3" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                {/* - */}
                    <div className="col-lg-3 col-sm-6">
                        <div className="portfolio-image-box" onClick={openPopupboxPj4}>
                            <img className="portfolio-image" src={pj4} alt="프로젝트4" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...PopupboxConfigPj1} />
            <PopupboxContainer {...PopupboxConfigPj2} />
            <PopupboxContainer {...PopupboxConfigPj3} />
            <PopupboxContainer {...PopupboxConfigPj4} />
        </div>
    )
}

export default Portfolio
