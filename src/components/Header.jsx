import React from 'react';
import './Header.css';
import Nav from './Nav'

const Header = () => {

    return ( 
        <>
            <div className="header-container">
                <h1 className="logo">
                    MusicTeams
                </h1>
                <Nav></Nav>
            </div>
        </>
     );
}
 
export default Header;
