import React from 'react';
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";

import './List.css';

const List = () => {
    const listMusic = [
        "Título:",
        "Artista:",
        "Álbum:",
    ];

    const list = listMusic.map((numbers) => 
        <li className="list-itens">
            {listMusic[0]}<br />
            {listMusic[1]}<br />
            {listMusic[2]}<br />
            <div className="btn-container">
                <button className="button-play">
                    <AiOutlinePlayCircle/>
                </button>
                <button  className="button-favorite">
                    <BsHeartFill/>
                </button>
            </div>
        </li>
    );

    return ( 
        <div className="list-container">
            <ul>
                {list}
            </ul>
        </div>
    );
}
 
export default List;