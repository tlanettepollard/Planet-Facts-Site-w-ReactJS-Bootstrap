import React, { useState, useEffect } from 'react';
import PlanetDataList from './PlanetDataList';

export default function PlanetMainCard(props) {

    return (
        <div className='planet-card'>
            <MainCard
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
const MainCard = (props) => {
    const [name, setName] = useState(props.name);
    const [text, setText] = useState(props.overview.content);
    const [imageUrl, setImageUrl] = useState(props.images.planet);
    const [surfaceImagePath, setSurfaceImagePath] = useState(props.images.geology);
    const [sourceLink, setSourceLink] = useState(props.overview.source);
    const [showSurfaceImage, setShowSurfaceImage] = useState(false);
    const [color, setColor] = useState(props.planet.color);
    const [size, setSize] = useState(props.planet.size);
    const [toggleOverview, setToggleOverview] = useState(false);
    const [toggleStructure, setToggleStructure] = useState(false);
    const [toggleSurface, setToggleSurface] = useState(false);
    const [navBtnStyle, setNavBtnStyle] = useState({ borderBottom: `3px solid ${color}`, color: "#ffffff" });
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    // Show Overview and set button bg and border colors
    useEffect(() => {
        showOverviewBtn();
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth);
        })
        if (windowSize < 600) {
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


    // Nav Btn functions

    const showOverviewBtn = () => {
        setName(props.name);
        setText(props.overview.content);
        setImageUrl(props.images.planet);
        setSourceLink(props.overview.source);
        setSize(props.planet.size);
        setColor(props.planet.color);
        hidePlanetImage();
        setToggleOverview(true);
        setToggleStructure(false);
        setToggleSurface(false);
    }

    const showStructureBtn = () => {
        setText(props.structure.content);
        setImageUrl(props.images.internal);
        setSourceLink(props.structure.source);
        hidePlanetImage();
        setToggleOverview(false);
        setToggleStructure(true);
        setToggleSurface(false);
    }

    const showSurfaceBtn = () => {
        setText(props.geology.content);
        setImageUrl(props.images.planet);
        setSurfaceImagePath(props.images.geology)
        setSourceLink(props.geology.source);
        showPlanetImage();
        setToggleOverview(false);
        setToggleStructure(false);
        setToggleSurface(true);
    }

    // Functions to handle images

    function showPlanetImage() {
        setSurfaceImage(true);
    }

    function hidePlanetImage() {
        setShowSurfaceImage(false);
    }

    // Functions to set button bg and border colors
    function setBtnBgColor(color) {
        setNavBtnStyle({ backgroundColor: `${color}` })
    }

    function setBtnBorderColor(color) {
        setNavBtnStyle({ borderBottom: `3px solid ${color}`, color: '#ffffff' })
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


    // Planet information section
    return (
        <div className='container planet-card__container'>
            <nav className='planet-card__nav'>
                <ul>
                    <li>
                        <button onClick={showOverviewBtn} id='overviewBtn' style={toggleOverview ? navBtnStyle : null}>
                            <span className='hide'>01</span>
                            Overview
                        </button>
                    </li>
                    <li>
                        <button onClick={showStructureBtn} id='structureBtn' style={toggleStructure ? navBtnStyle : null}>
                            <span className='hide'>02</span>
                            Structure
                        </button>
                    </li>
                    <li>
                        <button onClick={showSurfaceBtn} id='surfaceBtn' style={toggleSurface ? navBtnStyle : null}>
                            <span className='hide'>03</span>
                            Surface
                        </button>
                    </li>
                </ul>
            </nav>
            <div className='planet-image-container container'>
                
            </div>
            <div className='planet-card__content'>
                <h2>{name}</h2>
                <p>{text}</p>
                <span>Source: <a href={sourceLink}>Wikipedia</a></span>
            </div>
        </div>
    );





}