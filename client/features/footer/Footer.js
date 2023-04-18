import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div>
                <p id='copyright'>© 2023 GraceBuster</p>
                {/* turn the below contact-p into a link when contact page is live */}
                <p id='copyright'>Contact</p>
            </div>
        </>
    )
};

export default Footer;

// footer will be present in each component in its own <footer> element