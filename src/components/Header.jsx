import React from 'react';
import './Header.css';

const Header = () => {

    return ( 
        <div className="header-container">
            <nav className="navbar navbar-expand-sm justify-content-end navbar-dark bg-dark">

                <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-target">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>

                <div className="collapse navbar-collapse" id="nav-target">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link">
                                Top 10
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"
                            data-toggle="dropdown">
                                Categorias
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item">
                                    Rock
                                </a>
                                <a className="dropdown-item">
                                    Samba 
                                </a>
                                <a className="dropdown-item">
                                    Sertanejo
                                </a>
                                <a className="dropdown-item">
                                    Disco
                                </a>
                                <a className="dropdown-item">
                                    Hip-hop
                                </a>
                                <a className="dropdown-item">
                                    Jazz
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                Favoritos
                            </a>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input type="text"/>
                        <button className="btn btn-outline-white">Buscar</button>
                    </form>
                </div>
            </nav>
        </div>
     );
}
 
export default Header;
