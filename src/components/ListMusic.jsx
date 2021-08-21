import React from 'react';
import './ListMusic.css';

const ListMusic = () => {
    const attributes = [   `Título:
                            Artista:
                            Álbum:`,
                            `Título:
                            Artista:
                            Álbum:`,
                            `Título:
                            Artista:
                            Álbum:`,
                            `Título:
                            Artista:
                            Álbum:`,
                            `Título:
                            Artista:
                            Álbum:`,
                            `Título:
                            Artista:
                            Álbum:`,
                            `Título:
                            Artista:
                            Álbum:`,
                            `Título:
                            Artista:
                            Álbum:`,
                            `Título:
                            Artista:
                            Álbum:`,
                            `Título:
                            Artista:
                            Álbum:`,
                        ];
    const listMusic = attributes.map((list) => <li key={list.toString} className="listMusic-items">{list}</li>);

    return(
        <ul className="listMusic-container">
            {listMusic}
        </ul>
    );
}

export default ListMusic;