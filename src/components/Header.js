import React from 'react'
import Typed from 'react-typed'
import {Link} from "react-scroll";


const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>안녕하세요!</h1>
                <h3>FullStack Developer 김명훈입니다.</h3>
                {/* <Typed 
                    className="typed-text"
                    strings={["Python","React","AWS","Javascript","Oracle"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                /> */}
                <Link smooth={false} to="contacts" href="#" className="btn-main-upper">contact me</Link>
            </div>
        </div>
    )
}

export default Header
