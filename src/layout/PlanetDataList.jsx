import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function PlanetDataList(props) {
    return (
        <Container className='facts-container'>
            <div className='planet-card__data'>
                <Row className="gx-0">
                    <Col sm={12} md={3}>
                        <DataListItem name='rotation time' value={props.planet.rotation} className='' />
                    </Col>
                    <Col sm={12} md={3}>
                        <DataListItem name='revolution time' value={props.planet.revolution} className='' />
                    </Col>
                    <Col sm={12} md={3}>
                        <DataListItem name='radius' value={props.planet.radius} className='' />
                    </Col>
                    <Col sm={12} md={3}>
                        <DataListItem name='average temp.' value={props.planet.temperature} className='' />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}



function DataListItem(props) {
    return (
        <div className='facts container d-flex flex-md-column align-items-center align-items-md-start justify-content-between justify-content-md-center bg-transparent border border-secondary'>
            <p className='fact-title text-uppercase text-secondary'>{props.name}</p>
            <p className='fact-value text-uppercase'>{props.value}</p>
        </div>
    );
}