import React, { useState, useEffect } from 'react';
import PlanetDataList from './PlanetDataList';
import { Button } from 'react-bootstrap';

export default function PlanetContent(props) {

    return (
        <div>
            <MainCard
                planet={props.planetObj}
                name={props.planetObj.name}
                overview={props.planetObj.overview}
                structure={props.planetObj.structure}
                surface={props.planetObj.geology}
                images={props.planetObj.images}
            />
            <PlanetDataList planet={props.planetObj} />
        </div>
    );

}

const MainCard = (props) => {

    const [pageState, setPageState] = useState('overview');
    const [name, setName] = useState(props.name);
    const [content, setContent] = useState(props.overview.content);
    const [planetImage, setPlanetImage] = useState(props.images.planet);
    const [geologyImage, setGeologyImage] = useState(props.images.geology);
    const [wikiUrl, setWikiUrl] = useState(props.overview.source);
    const [showSurfaceImage, setShowSurfaceImage] = useState(false);
    const [toggleOverview, setToggleOverview] = useState(false);
    const [toggleStructure, setToggleStructure] = useState(false);
    const [toggleSurface, setToggleSurface] = useState(false);


    useEffect(() => {
        setPageState('overview');
        showOverview()
    }, [props.name])


    const showOverview = () => {
        setName(props.name);
        setContent(props.overview.content);
        setPlanetImage(props.images.planet);
        setWikiUrl(props.overview.source);
        hideImage();
        setToggleOverview(true);
        setToggleStructure(false);
        setToggleSurface(false);
    }

    const showStructure = () => {
        setContent(props.planet.structure.content);
        setPlanetImage(props.images.internal);
        setWikiUrl(props.planet.structure.source);
        hideImage();
        setToggleOverview(false);
        setToggleStructure(true);
        setToggleSurface(false);
    }

    const showSurface = () => {
        setContent(props.planet.geology.content);
        setPlanetImage(props.images.planet);
        setWikiUrl(props.planet.geology.source);
        setGeologyImage(props.images.geology);
        showImage();
        setToggleOverview(false);
        setToggleStructure(true);
        setToggleSurface(true);
    }

    function showImage() {
        setShowSurfaceImage(true);
    }

    function hideImage() {
        setShowSurfaceImage(false);
    }




    return (
        <div className='planet-card container'>
            <nav className='planet-card__nav'>
                <ul className='d-flex flex-row justify-content-between px-2 py-2 '>
                    <li>
                        <Button className={pageState === 'overview' ? 'active' : null} onClick={showOverview} size='sm' variant='dark' id='overviewContent'>
                            <span>01</span>
                            Overview
                        </Button>
                    </li>
                    <li>
                        <Button className={pageState === 'structure' ? 'active' : null} onClick={showStructure} size='sm' variant='dark' id='structureContent'>
                            <span>02</span>
                            Structure
                        </Button>
                    </li>
                    <li>
                        <Button className={pageState === 'surface' ? 'active' : null} onClick={showSurface} size='sm' variant='dark' id='surfaceContent'>
                            <span>03</span>
                            Surface
                        </Button>
                    </li>
                </ul>
            </nav>
            <div className='planet-image__container img-fluid' style={{ backgroundImage: `url(${planetImage})` }}>
                {showSurfaceImage ? <img className='surface-image img-fluid' src={`${geologyImage.substring(1)}`} alt='' /> : null}
            </div>
            <div className='planet-card__content container text-center text-md-start'>
                <h2>{name}</h2>
                <p>{content}</p>
                <span>Source: <a href={wikiUrl}>Wikipedia</a></span>
            </div>

        </div >
    )


};


