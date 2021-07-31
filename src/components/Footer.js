import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'react-share';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>city busan main st 2021 office #2323</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-5555">+(051)010-7353-5387</a>
                        </div>
                        <div className="d-flex">
                            <p>roykimmyunghoon@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                                <br />
                                <a className="footer-nav">Services</a>
                                <br />
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br />
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Contact</a>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"http://gobella.kr:3001"}
                                quote={"fullstack developer"}
                                hashtag="#react"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"http://gobella.kr:3001"}
                                quote={"fullstack developer"}
                                hashtag="#react"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"http://gobella.kr:3001"}
                                quote={"fullstack developer"}
                                hashtag="#react"
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"http://gobella.kr:3001"}
                                quote={"fullstack developer"}
                                hashtag="#react"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <div className="p pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Gobella | All Right Reserverd
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
