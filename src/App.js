import React from 'react';
import Header from './components/Header';
import ListMusic from './components/ListMusic';

import './App.css';

export default function App(){
    return(
        <div>
            <div className="container">
                <Header />
                <ListMusic />
            </div>
        </div>
    );
}