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
    const listMusic = attributes.map((m) => <li className="listMusic-items">{m}</li>);

    return(
        <ul className="listMusic-container">
            {listMusic}
        </ul>
    );
}

export default ListMusic;