import React from 'react';
import './Nav.css';

const Nav = () => {
    return ( 
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <button className="navbar-toggler">

            </button>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link">Top 10</a>
                </li>
                <li className="nav-item">
                    <a>Categorias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Favoritos</a>
                </li>
                <input className="input-data" type="text"/>
            </ul>
        </nav>
     );
}
 
export default Nav;