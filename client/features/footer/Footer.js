import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div id='footer-ctr'>
                <p id='copyright'>© 2023 GraceBuster |</p>
                <Link to='/contact'>Contact</Link>
            </div>
        </>
    )
};

export default Footer;

// footer will be present in each component in its own <footer> element