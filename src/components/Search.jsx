import React from 'react';

import './Search.css';
const Search = () => {
    return ( 

        <div className="search-container">
            <input type="text" placeholder="Buscar ..."/>
            <button className="btn-search">Buscar</button>
        </div>

     );
}
 
export default Search;