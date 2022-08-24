import React from 'react';

const Contact = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const { theme, handleToggle } = props

    return (
        <section id='contact' className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-part">
                        <h1 className={theme ? "contact-title dark" : "contact-title"}>Contact</h1>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <input 
                                type="text" 
                                className="input" 
                                placeholder ="First Name"
                            />   
                            <input 
                                type="text" 
                                className="input"
                                placeholder="Last Name"
                            />   
                            <input 
                                type="text" 
                                className="input"
                                placeholder="Your E-mail"
                            />   
                            <input 
                                type="text" 
                                className="input"
                                placeholder="Write something"
                            />  
                            <button className='contact-button'>Send a Message</button>
                        </form>  
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
