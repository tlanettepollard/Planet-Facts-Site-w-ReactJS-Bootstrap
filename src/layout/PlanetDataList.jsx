import React from 'react';


export default function PlanetDataList(props) {
    return (
        <ul className='planet-card__data'>
            <DataListItem name='rotation time' value={props.planet.rotation} />
            <DataListItem name='revolution time' value={props.planet.revolution} />
            <DataListItem name='radius' value={props.planet.radius} />
            <DataListItem name='average temp.' value={props.planet.temperature} />
        </ul>
    );
}



function DataListItem(props) {
    return (
        <li>
            <span>{props.name}</span>
            <span className='fact-value'>{props.value}</span>
        </li>
    );
}