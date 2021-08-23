import React from 'react';
import './Nav.css';

const Nav = () => {
    return ( 
        <nav>
            <div>
                    <h1>
                        <a>Music Teams</a>
                    </h1>

                    <div>
                        <ul>
                            
                            <li>
                                <a>
                                    Categorias
                                </a>
                            </li>
                            
                            <li>
                                <a>
                                    Favoritos
                                </a>
                            </li>
                        </ul>
                        <form>
                            <input/>
                            <button>Buscar</button>
                        </form>
                    </div>
            </div>
        </nav>
     );
}
 
export default Nav;