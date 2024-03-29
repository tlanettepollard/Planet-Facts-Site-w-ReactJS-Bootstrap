import React, { useState, useEffect } from 'react';
import PlanetDataList from './PlanetDataList';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
//import { Col, Row, Container } from 'react-bootstrap';


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
            <div role='contentinfo' className='mt-md-5 mt-lg-5 mt-xl-5'>
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
            <section className='planet-card container-lg-fluid d-lg-flex flex-lg-column flex-xl-row align-items-lg-center pb-2 mt-lg-5 mt-xl-0'>

                <nav className='planet-card__nav--mobile d-md-none'>
                    <ul className={`nav-buttons d-flex flex-row flex-md-column justify-content-between align-items-center px-2 py-2 container borderTop borderBottom ${planetId}`}>
                        <li>
                            <Button className={`btnPlanetMobile mx-2 pt-4 ${pageState === 'overview' ? 'active' : null}`} size='sm' type='button' onClick={showOverviewInfo}>
                                <span className='text-uppercase text-secondary heading-6'>Overview</span>
                            </Button>
                        </li>
                        <li>
                            <Button className={`btnPlanetMobile mx-2 pt-4 ${pageState === 'structure' ? 'active' : null}`} size='sm' type='button' onClick={showStructureInfo}>
                                <span className=' text-uppercase text-secondary heading-6'>Structure</span>
                            </Button>
                        </li>
                        <li>
                            <Button className={`btnPlanetMobile mx-2 pt-4 ${pageState === 'geology' ? 'active' : null}`} size='sm' type='button' onClick={showSurfaceInfo}>
                                <span className=' text-uppercase text-secondary heading-6'>Surface</span>

                            </Button>
                        </li>
                    </ul>
                </nav>
                <section role='contentinfo' id={planetId} className='planet-image__container container position-relative d-flex align-items-center justify-content-center m-auto p-5 p-xl-0'>
                    <Image className='planet-image' src={pageState === 'structure' ? props.images.internal : mainImage} fluid alt='Planet Image' />
                    {showSurfaceImage ? <Image className='surface-image position-absolute  z-0' src={surfaceImage} fluid alt='Geology image' /> : null}
                </section>
                <section className='planet__content container text-center text-md-start mt-5 mb-4 pb-4 ms-lg-4 ps-lg-4 d-md-flex flex-md-row flex-xl-column justify-content-md-between align-content-md-baseline align-items-lg-center'>
                    <div role='contentinfo' className='planet__content-info col-md-6 col-lg-6 col-xl-8 me-md-2 me-lg-0 mb-xl-0'>
                        <h2 className='planet-name heading-2 py-2'>{name}</h2>
                        <p className='planet-info py-3'>{planetText}</p>
                        <div className='text-center text-md-start'>
                            <span>Source: <a href={wikiUrl}>Wikipedia</a></span>
                            <img src='/assets/icon-source.svg' alt='source icon' />
                        </div>
                    </div>
                    <div role='navigation' className='col-md-6 col-lg-6 col-xl-8'>
                        <div className='planet-card__nav--tablet d-none d-md-block d-md-flex flex-md-column justify-content-md-center py-md-3'>
                            <div className={`nav-buttons--tablet d-grid gap-4 mt-3 ms-md-2 ms-xl-0 ${planetId}`}>

                                <Button className={`text-start d-md-flex justify-content-md-start btnPlanetTablet ${pageState === 'overview' ? 'active' : null}`} size='lg' type='button' onClick={showOverviewInfo}>
                                    <span className='m-2 text-secondary'>01</span>
                                    <span className='m-2 text-uppercase fw-bold'>Overview</span>
                                </Button>

                                <Button className={`text-start d-md-flex justify-content-md-start btnPlanetTablet ${pageState === 'structure' ? 'active' : null}`} size='lg' type='button' onClick={showStructureInfo}>
                                    <span className='m-2 text-secondary'>02</span>
                                    <span className='m-2 text-uppercase fw-bold'> Structure</span>
                                </Button>

                                <Button className={`text-start d-md-flex justify-content-md-start btnPlanetTablet ${pageState === 'geology' ? 'active' : null}`} size='lg' type='button' onClick={showSurfaceInfo}>
                                    <span className='m-2 text-secondary'>03</span>
                                    <span className='m-2 text-uppercase fw-bold'>Surface</span>
                                </Button>

                            </div>
                        </div>
                    </div>
                </section>
            </section >

        )
    }

}




