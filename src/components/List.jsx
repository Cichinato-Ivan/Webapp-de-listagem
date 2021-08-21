import React from 'react';

import './List.css';

const List = ({list}) => {
    return <div className="list-container">
        <text className="list-itens">
            {list.title}<br />
            {list.artist}<br />
            {list.album}<br />
        </text>
    </div>
}
 
export default List;