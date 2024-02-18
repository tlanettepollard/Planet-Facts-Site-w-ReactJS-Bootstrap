import React, { useState, useEffect } from 'react';
import PlanetDataList from './PlanetDataList';
import { Button } from 'react-bootstrap';


export default function PlanetContent(props) {
    const [pageState, setPageState] = useState('overview');


    const toggleButton = (option) => {
        setPageState(prev => prev === option ? prev : option);
    };

    useEffect(() => {
        setPageState('overview')
    }, [props.name])



    return (
        <>
            <div className='planet-card container'>
                <div className='planet-card__nav'>
                    <ul className='d-flex flex-row justify-content-between px-2 py-2'>
                        <li>
                            <Button className={pageState === 'overview' ? 'active' : null} onClick={() => toggleButton('overview')} variant='dark' size='sm' id='overviewContent'>
                                <span>01</span>
                                Overview
                            </Button>
                        </li>
                        <li>
                            <Button className={pageState === 'structure' ? 'active' : null} onClick={() => toggleButton('structure')} variant='dark' size='sm' id='structureContent'>
                                <span>02</span>
                                Structure
                            </Button>
                        </li>
                        <li>
                            <Button className={pageState === 'surface' ? 'active' : null} onClick={() => toggleButton('surface')} variant='dark' size='sm' id='surfaceContent'>
                                <span>03</span>
                                Surface
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='planet-image__container img-fluid'>

            </div>
            <div className='data__container container'>
                <PlanetDataList planet={props.planetObj} />
            </div>
        </>
    );

}




