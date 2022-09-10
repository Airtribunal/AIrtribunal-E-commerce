import React from 'react';
import { Contact } from "./index"

const Homepage = (props) => {
    const { theme } = props

    return (
        <div className="homepage">
            <div className="container">
                <div className={theme ? "home-content dark" : "home-content"}>
                    <h1 className={theme ? "home-title-dark" : "home-title"} lang='en'>Airtribunal</h1>
                    <p className="home-desc">Fashion is the most changing and unpredictable thing in our life. Things that were in trend yesterday may become unfashionable and boring tomorrow. On the other hand tendencies that was once extremely popular sometimes come back to life.</p>
                </div>
                <Contact 
                    handleToggle={props.handleToggle} 
                    theme={props.theme}
                />
            </div>
        </div>
    );
}

export default Homepage;
