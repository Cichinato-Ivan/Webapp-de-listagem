import React, { useState } from 'react';

import Header from './components/Header';
import Lists from './components/Lists';
import Search from './components/Search';

import './App.css';

const App = () => {
    const [lists, setList] = useState([
        {
            title:"Título:",
            artist:"Artista:",
            album:"Álbum:",
        },
        {
            title:"Título:",
            artist:"Artista:",
            album:"Álbum:",
        },
    ]);

    return(
        <>
            <div className="container">
                <Header/>
                <Search/>
                <Lists lists={lists}/>
            </div>
        </>
    );
}

export default App;