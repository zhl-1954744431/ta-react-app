import React from 'react'
import '../../css/one.css'
function Header() {
    return (
        <header id="header">
            <nav className="menu">
                <span>导航</span>
            </nav>
            <h1 className="logo">miaov.com</h1>
            <span className="user"></span>
        </header>
    );
}


export default Header