import React, { useState, useEffect } from 'react';
import PlanetDataList from './PlanetDataList';
import { Button } from 'react-bootstrap';
import { Col, Row, Container } from 'react-bootstrap';


export default function PlanetContent(props) {


    return (
        <>
            <MainCard
                planet={props.planetObj}
                name={props.planetObj.name}
                id={props.planetObj.id}
                overview={props.planetObj.overview}
                structure={props.planetObj.structure}
                surface={props.planetObj.geology}
                images={props.planetObj.images}
            />
            <div className='data__container container'>
                <PlanetDataList planet={props.planetObj} />
            </div>
        </>
    );


    function MainCard(props) {
        const [pageState, setPageState] = useState('overview');
        const [name, setName] = useState(props.name);
        const [planetId, setPlanetId] = useState(props.id);
        const [planetText, setPlanetText] = useState(props.overview.content);
        const [mainImage, setMainImage] = useState(props.images.planet);
        const [surfaceImage, setSurfaceImage] = useState(props.images.geology);
        const [wikiUrl, setWikiUrl] = useState(props.overview.source);
        const [showSurfaceImage, setShowSurfaceImage] = useState(false);


        useEffect((e) => {
            showOverviewInfo();
            setPageState('overview');


        }, [props.name])


        function showOverviewInfo() {
            setName(props.name);
            setPageState('overview')
            setPlanetId(props.id);
            setPlanetText(props.overview.content)
            setMainImage(props.images.planet)
            setWikiUrl(props.overview.source)
            hideImage();
        }

        function showStructureInfo() {
            setPageState('structure')
            setPlanetText(props.planet.structure.content)
            setMainImage(props.images.internal)
            setWikiUrl(props.planet.structure.source)
            hideImage();
        }

        function showSurfaceInfo() {
            setPageState('geology')
            setPlanetText(props.planet.geology.content)
            setMainImage(props.images.planet)
            setSurfaceImage(props.images.geology)
            setWikiUrl(props.planet.geology.source)
            showImage();
        }


        function showImage() {
            setShowSurfaceImage(true);
        }

        function hideImage() {
            setShowSurfaceImage(false);
        }


        return (
            <div className='planet-card container'>
                <div className='row'>
                    <nav className='planet-card__nav--mobile d-md-none'>
                        <ul className='nav-buttons d-flex flex-row flex-md-column justify-content-between align-items-center px-2 py-2 container'>
                            <li>
                                <Button className={pageState === 'overview' ? 'active' : null} size='sm' variant='dark' type='button' onClick={showOverviewInfo}>
                                    <span>01</span>
                                    Overview
                                </Button>
                            </li>
                            <li>
                                <Button className={pageState === 'structure' ? 'active' : null} size='sm' variant='dark' type='button' onClick={showStructureInfo}>
                                    <span>02</span>
                                    Structure
                                </Button>
                            </li>
                            <li>
                                <Button className={pageState === 'geology' ? 'active' : null} size='sm' variant='dark' type='button' onClick={showSurfaceInfo}>
                                    <span>03</span>
                                    Surface
                                </Button>
                            </li>
                        </ul>
                    </nav>
                    <div id={planetId} className='planet-image__container container position-relative d-flex align-items-center align-items-xl-stretch justify-content-center m-auto p-5 p-xl-0 mt-xl-5'>
                        <img className='planet-image img-fluid' src={pageState === 'structure' ? props.images.internal : mainImage} />
                        {showSurfaceImage ? <img className='surface-image img-fluid position-absolute z-3' src={surfaceImage} /> : null}
                    </div>
                    <div className='planet__content container text-center text-md-start mt-5 mb-4 d-md-flex flex-md-row justify-content-md-between'>
                        <div className='planet__content-info col-md-6'>
                            <h2>{name}</h2>
                            <p>{planetText}</p>
                            <div className='text-center text-md-start'>
                                <span>Source: <a href={wikiUrl}>Wikipedia</a></span>
                                <img src='../../public/assets/icon-source.svg' alt='source icon' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='planet-card__nav--tablet d-none d-md-block'>
                                <div className='nav-buttons--tablet d-grid gap-2'>

                                    <Button className={pageState === 'overview' ? 'active' : null} size='lg' variant='dark' type='button' onClick={showOverviewInfo}>
                                        <span>01</span>
                                        Overview
                                    </Button>

                                    <Button className={pageState === 'structure' ? 'active' : null} size='lg' variant='dark' type='button' onClick={showStructureInfo}>
                                        <span>02</span>
                                        Structure
                                    </Button>

                                    <Button className={pageState === 'geology' ? 'active' : null} size='lg' variant='dark' type='button' onClick={showSurfaceInfo}>
                                        <span>03</span>
                                        Surface
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }

}




