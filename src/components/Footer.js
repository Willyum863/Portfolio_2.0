import React from 'react';

function Footer() {
    return (
        <footer>
            <a href='https://github.com/Willyum863' target='_blank' rel="noreferrer">
                <img src={require('Portfolio_2.0/src/assets/images/GitHub-Mark.png')} alt='Github icon' />
            </a>
            <a href='https://www.google.com/' target='_blank' rel="noreferrer">
                <img src={require('Portfolio_2.0/src/assets/images/linkedin.png')} alt='Linkedin icon' />
            </a>
            <a href='https://www.google.com/' target='_blank' rel="noreferrer">
                <img src={require('Portfolio_2.0/src/assets/images/twitter.png')} alt='Twitter icon' />
            </a>
        </footer>
    )
}

export default Footer;
