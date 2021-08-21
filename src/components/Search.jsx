import React, { useState } from 'react';

import Button from './Button';
import './Search.css';
const Search = () => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
        setInputData("");
    };

    return ( 
        <div className="search-container">
            <input onChange={handleInputChange} value={inputData} className="search-input" type="text" placeholder="Buscar ..."/>
            <div className="search-button-container">
                <Button>Buscar</Button>
            </div>
        </div>
     );
}
 
export default Search;