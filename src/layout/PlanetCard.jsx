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

}