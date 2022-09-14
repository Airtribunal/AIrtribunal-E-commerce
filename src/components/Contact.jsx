import React, { useState } from 'react';

const Contact = (props) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const { theme } = props

    return (
        <section id='contact' className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-part">
                        <h1 className={theme ? "contact-title dark" : "contact-title"}>Contact</h1>
                        <form 
                            onSubmit={handleSubmit} 
                            className="contact-form"
                        >
                            <input
                                required
                                type="text"
                                className="input"
                                placeholder="First Name"
                                onChange={handleChange}
                                name="firstName"
                                value={formData.firstName}
                            />
                            <input
                                required
                                type="text"
                                className="input"
                                placeholder="Last Name"
                                onChange={handleChange}
                                name="lastName"
                                value={formData.lastName}
                            />
                            <input
                                required
                                type="email"
                                className="input"
                                placeholder="Your E-mail"
                                onChange={handleChange}
                                name="email"
                                value={formData.email}
                            />
                            <textarea
                                type="text"
                                className="input"
                                placeholder="Write something"
                                onChange={handleChange}
                                name="message"
                                value={formData.message}
                            />
                            <button type='submit' className='contact-button'>Send a Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
