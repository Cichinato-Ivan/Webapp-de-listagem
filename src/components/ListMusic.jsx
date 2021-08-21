import React from 'react';
import './ListMusic.css';

const ListMusic = () => {
    const attributes = [`   Título:
                            Artista:
                            Álbum:
                        `];
    const listMusic = attributes.map((m) => <li className="listMusic-container">{m}</li>);

    return(
        <ul>
            {listMusic}
            {listMusic}
            {listMusic}
            {listMusic}
            {listMusic}
            {listMusic}
            {listMusic}
            {listMusic}
            {listMusic}
            {listMusic}
        </ul>
    );
}

export default ListMusic;