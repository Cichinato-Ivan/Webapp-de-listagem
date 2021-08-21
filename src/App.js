import React from 'react';

import Header from './components/Header';
import ListMusic from './components/ListMusic';

import './App.css';

const App = () => {

    return(
        <div className="container">
            <Header/>
            <ListMusic/>
        </div>
    );
}

export default App;