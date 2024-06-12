import React from 'react';
import './header.css';
import Logo from './img/logo.png'

function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="logo" className="logo" />
            <span className='headerTxt'>Krakowski Okręgowy Związek Tenisa Stołowego</span>
        </header>
    );
}

export default Header;