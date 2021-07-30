import React from 'react';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>please fillout the form and describe</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* name input */}
                        <input type="text" 
                            id="name"
                            className="form-control" 
                            placeholder="name"
                            name="name"
                            autoComplete='new-password'
                        />
                        <div className="line"></div>
                        <input type="text"  
                            id="phone"
                            className="form-control" 
                            placeholder="phone"
                            phone="phone"
                            autoComplete='new-password'
                        />
                        <div className="line"></div>
                        <input type="email"  
                            id="email"
                            className="form-control" 
                            placeholder="email"
                            email="email"
                            autoComplete='new-password'
                        />
                        <div className="line"></div>
                        <input type="text" 
                            id="subject"
                            className="form-control" 
                            placeholder="subject"
                            subject="subject"
                            autoComplete='new-password'
                        />
                        <div className="line"></div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea 
                            id="description"
                            className="form-control" 
                            placeholder="description"
                            description="description"
                            autoComplete='new-password'
                        >
                        </textarea>
                        <div className="line"></div>
                        <button className="btn btn-outline-danger contact-btn" type="submit">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
