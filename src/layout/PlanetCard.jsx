import React, { useState, useEffect } from 'react';

export default function PlanetCard(props) {

    return (
        <div className='planet-card'>
            <MainInfoCard />
            <MainDataList />
        </div>
    );
}

// Get information about each planet
const MainInfoCard = (props) => {
    const [name, setName] = useState(props.name);
    const [text, setText] = useState(props.overview.content);
    const [imageUrl, setImageUrl] = useState(props.images.planet);
    const [surfaceImage, setSurfaceImage] = useState(props.images.geology);
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
        setSurfaceImage(props.images.geology)
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



}