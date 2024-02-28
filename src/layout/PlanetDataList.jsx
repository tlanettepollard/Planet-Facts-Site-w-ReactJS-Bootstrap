import React from 'react';


export default function PlanetDataList(props) {
    return (
        <section className='facts-container container'>
            <div className='planet-card__data'>
                <div className="">
                    <DataListItem name='rotation time' value={props.planet.rotation} className='' />
                    <DataListItem name='revolution time' value={props.planet.revolution} className='' />
                    <DataListItem name='radius' value={props.planet.radius} className='' />
                    <DataListItem name='average temp.' value={props.planet.temperature} className='' />
                </div>
            </div>
        </section>
    );
}



function DataListItem(props) {
    return (
        <div className='facts container d-flex flex-md-column align-items-center align-items-md-start justify-content-between justify-content-md-even bg-transparent border border-secondary'>
            <p className='fact-title text-uppercase text-secondary'>{props.name}</p>
            <p className='fact-value text-uppercase'>{props.value}</p>
        </div>
    );
}