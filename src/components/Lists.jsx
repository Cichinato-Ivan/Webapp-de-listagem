import React from 'react';

import List from './List'
const Lists = ({ lists }) => {
    
    return (
        <>
            {lists.map((list) => (
                <List list={list}/>
            ))}
        </>
    )
};
 
export default Lists;