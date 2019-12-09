import React from 'react';

const ListDefault = props => (
    <ul>
        {props.items.map(item => (
            <li>
                <a href="{{item.url}}">{item.name}</a>
            </li>
        ))}
    </ul>
);

export default ListDefault;
