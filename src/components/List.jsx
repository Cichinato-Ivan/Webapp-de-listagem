import React from 'react';

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