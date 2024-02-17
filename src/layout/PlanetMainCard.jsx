import React, { useState, useEffect } from 'react';
import PlanetDataList from './PlanetDataList';
import { Button } from 'react-bootstrap';

export default function PlanetMainCard(props) {

    return (
        <div>
            <MainInfoCard

            />
            <PlanetDataList planet={props.planetObj} />
        </div>
    );

}

const MainInfoCard = (props) => {

};


