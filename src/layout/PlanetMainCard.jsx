import React, { useState, useEffect } from 'react';
import PlanetDataList from './PlanetDataList';

export default function PlanetMainCard(props) {


    return (
        <div className='planet-card'>
            <MainInfoCard
                planet={props.planetObj}
                name={props.planetObj.name}
                overview={props.planetObj.overview}
                structure={props.planetObj.structure}
                geology={props.planetObj.geology}
                images={props.planetObj.images}
            />
            <PlanetDataList planet={props.planetObj} />
        </div>
    );
}

// Get information about each planet
const MainInfoCard = (props) => {
    const [name, setName] = useState(props.name);
    const [planetInfo, setPlanetInfo] = useState(props.overview.content);
    const [sourceLink, setSourceLink] = useState(props.overview.source);
    const [imageUrl, setImageUrl] = useState(props.images.planet);
    const [surfaceImage, setSurfaceImage] = useState(props.images.geology);
    const [showSurfaceImage, setShowSurfaceImage] = useState(false);
    const [color, setColor] = useState(props.planet.color);
    const [size, setSize] = useState(props.planet.size);
    //const [geologySize, setGeologySize] = useState(props.planet.geologysize);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [navBtnStyle, setBtnNavStyle] = useState({ borderBottom: `3px solid ${color}`, color: "#ffffff" });
    const [toggleOverview, setToggleOverview] = useState(false);
    const [toggleStructure, setToggleStructure] = useState(false);
    const [toggleSurface, setToggleSurface] = useState(false);

    // Show Overview and set button background & border
    useEffect(() => {
        showOverviewBtn();
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth);
        })
        if (windowSize < 768) {
            setBtnBorderColor(color)
            resetNavBtnValues()
        } else {
            setBtnBgColor(color)
            changeNavBtnValues()
        }
        return () => {
            window.addEventListener('resize', () => {
                setWindowSize(window.innerWidth)
            })
        }
    }, [props.name, windowSize, color])


    // Nav Btn Functions

    const showOverviewBtn = () => {
        setName(props.name);
        setPlanetInfo(props.overview.content);
        setImageUrl(props.images.planet);
        setSourceLink(props.overview.source);
        setSize(props.planet.size);
        setColor(props.planet.color);
        hideSurfacePlanetImage()
        setToggleOverview(true);
        setToggleStructure(false);
        setToggleSurface(false);
    }

    const showStructureBtn = () => {
        setPlanetInfo(props.structure.content);
        setImageUrl(props.images.internal)
        setSourceLink(props.structure.source);
        hideSurfacePlanetImage()
        setToggleOverview(false);
        setToggleStructure(true);
        setToggleSurface(false);
    }

    const showSurfaceBtn = () => {
        setPlanetInfo(props.geology.content);
        setImageUrl(props.images.planet);
        setSurfaceImage(props.images.geology)
        setSourceLink(props.geology.source);
        showSurfacePlanetImage();
        //setGeologySize(props.planet.geolgoysize);
        setToggleOverview(false);
        setToggleStructure(false);
        setToggleSurface(true);
    }




    // Functions to handle images
    function showSurfacePlanetImage() {
        setShowSurfaceImage(true);
    }

    function hideSurfacePlanetImage() {
        setShowSurfaceImage(false);
    }

    // Functions to set button bg & border colors

    function setBtnBgColor(color) {
        setBtnNavStyle({ backgroundColor: `${color}` })
    }

    function setBtnBorderColor(color) {
        setBtnNavStyle({ borderBottom: `3px solid ${color}` })
    }


    function changeNavBtnValues() {
        let structure = document.querySelector('#structureBtn');
        let surface = document.querySelector('#surfaceBtn');
        structure.childNodes[1].nodeValue = 'internal structure';
        surface.childNodes[1].nodeValue = 'surface geology';
    }

    function resetNavBtnValues() {
        let structure = document.querySelector('#structureBtn');
        let surface = document.querySelector('#surfaceBtn');
        structure.childNodes[1].nodeValue = 'structure';
        surface.childNodes[1].nodeValue = 'geology';
    }



    // Planet Information

    return (
        <div className='container planet-card'>
            <nav className='planet-card__nav'>
                <ul className='d-flex flex-row justify-content-between px-2 py-2 border-bottom border-top border-1 border-secondary border-md-none'>
                    <li>
                        <button onClick={showOverviewBtn} className='btn btn-sm btn-dark text-uppercase' id='overviewBtn' role='button' style={toggleOverview ? navBtnStyle : null}>
                            <span className='d-none d-md-block'>01 </span>
                            Overview
                        </button>
                    </li>
                    <li>
                        <button onClick={showStructureBtn} className='btn btn-sm btn-dark text-uppercase' id='structureBtn' style={toggleStructure ? navBtnStyle : null}>
                            <span className='d-none d-md-block'>02 </span>
                            Structure
                        </button>
                    </li>
                    <li>
                        <button onClick={showSurfaceBtn} id='surfaceBtn' className='btn btn-sm btn-dark text-uppercase' style={toggleSurface ? navBtnStyle : null}>
                            <span className='d-none d-md-block'>03 </span>
                            Surface
                        </button>
                    </li>

                </ul>
            </nav>
            <div className='planet-image-container img-fluid' style={{ backgroundImage: `url(${imageUrl})`, width: `${size.small}` }}>
                {showSurfaceImage ? <img className='surface-image img-fluid' src={`${surfaceImage.substring(1)}`} /> : null}
            </div>
            <div className='planet-card__content container text-center text-md-start position-relative'>
                <h2>{name}</h2>
                <p>{planetInfo}</p>
                <span>Source: <a href={sourceLink}>Wikipedia</a></span>
            </div>
        </div>
    );
}