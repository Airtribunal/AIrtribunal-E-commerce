import React from 'react';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("opa dide");
    }

    return (
        <section id='contact' className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-part">
                        <h1 className="contact-title">Contact</h1>
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
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="contact-part">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
