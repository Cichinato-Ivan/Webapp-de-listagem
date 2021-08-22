import React from 'react';
import './Nav.css';

const Nav = () => {
    return ( 
        <div className="nav-container">
            <div>
                <ul>
                    <li>Top 10</li>
                    <li>Categorias</li>
                    <li>Favoritos</li>
                    <li><input className="input-data" type="text"/></li>
                </ul>
                
            </div>
        </div>
     );
}
 
export default Nav;