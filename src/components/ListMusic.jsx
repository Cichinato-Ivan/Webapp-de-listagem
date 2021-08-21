import React from 'react';
import Button from './Button';

import './ListMusic.css';

const ListMusic = (props) => {
    console.log(props);
    const listMusic = [`Título: Artista: Álbum:`,
                       `Título: Artista: Álbum:`,
                       `Título: Artista: Álbum:`,
                       `Título: Artista: Álbum:`,
                       `Título: Artista: Álbum:`,
                       `Título: Artista: Álbum:`,
                       `Título: Artista: Álbum:`,
                       `Título: Artista: Álbum:`,
                       `Título: Artista: Álbum:`,
                       `Título: Artista: Álbum:`,
                      ];
    const list = listMusic.map((list) =>
        <li key={list.toString()} className="listMusic-items">
            {list}
            <Button />  
        </li>
    );
   
    return(
        <div className="ListMusic-container">
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default ListMusic;