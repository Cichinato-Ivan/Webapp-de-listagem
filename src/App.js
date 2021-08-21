import React from 'react';

import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';

import './App.css';

const App = () => {
    
    return(
        <>
            <div className="container">
                <Header/>
                <Search/>
                <List/>
            </div>
        </>
    );
}

export default App;