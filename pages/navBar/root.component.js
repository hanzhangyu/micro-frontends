import React from 'react'
import {navigateToUrl} from 'single-spa'
import  './app.scss';

const NavBar = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="/" onClick={navigateToUrl}>home</a>
            <a href="/hello" onClick={navigateToUrl}>vue2</a>
            <a href="/vue-child" onClick={navigateToUrl}>vue</a>
            <a href="/react-child" onClick={navigateToUrl}>react</a>
        </div>
    </nav>
)

export default NavBar
