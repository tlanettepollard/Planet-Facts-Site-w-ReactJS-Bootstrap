import React from 'react';


export default function PlanetDataList(props) {
    return (
        <div className='facts-container container'>
            <div className='planet-card__data d-flex flex-column flex-md-row justify-content-md-between'>
                <DataListItem name='rotation time' value={props.planet.rotation} />
                <DataListItem name='revolution time' value={props.planet.revolution} />
                <DataListItem name='radius' value={props.planet.radius} />
                <DataListItem name='average temp.' value={props.planet.temperature} />
            </div>
        </div>
    );
}



function DataListItem(props) {
    return (
        <div className='facts d-flex flex-row justify-content-between align-items-center flex-md-column justify-content-md-center align-items-md-start bg-transparent'>
            <p className='fact-title'>{props.name}</p>
            <p className='fact-value'>{props.value}</p>
        </div>
    );
}