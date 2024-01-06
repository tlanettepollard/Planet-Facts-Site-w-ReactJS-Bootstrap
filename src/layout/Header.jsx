import React, { useEffect, useState } from 'react';
import { Nav, Container, NavbarBrand, NavbarCollapse, NavbarToggle, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='page-header'>
            <Navbar collapseOnSelect expand="md" className='bg-body-dark'>
                <Container>
                    <NavbarBrand>
                        <h1 className='text-uppercase'>The Planets</h1>
                    </NavbarBrand>
                    <NavbarToggle aria-controls='navbarScroll' />
                    <NavbarCollapse id='navbarScroll'>
                        <Nav className='me-auto'>
                            <Link to='/mercury' className='planet-page-link text-uppercase link-underline link-underline-opacity-0' id='border-0'>
                                <img src="/assets/mercury-circle.png" className='me-4' alt="" />
                                <span>Mercury</span>
                            </Link>
                            <Link to='/venus' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0'>
                                <img src="/assets/venus-circle.png" className='me-4' alt="" />
                                <span>Venus</span></Link>
                            <Link to='/earth' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0'>
                                <img src="/assets/earth-circle.png" className='me-4' alt="" />
                                <span>Earth</span></Link>
                            <Link to='/mars' className='planet-page-link text-uppercase link-underline link-underline-opacity-0'>
                                <img src="/assets/mars-circle.png" className='me-4' alt="" />
                                <span>Mars</span></Link>
                            <Link to='/jupiter' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0'>
                                <img src="/assets/jupiter-circle.png" className='me-4' alt="" />
                                <span>Jupiter</span></Link>
                            <Link to='/saturn' className='planet-page-link text-uppercase link-underline link-underline-opacity-0'>
                                <img src="/assets/saturn-circle.png" className='me-4' alt="" />
                                <span>Saturn</span></Link>
                            <Link to='/uranus' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0'>
                                <img src="/assets/uranus-circle.png" className='me-4' alt="" />
                                <span>Uranus</span></Link>
                            <Link to='/neptune' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0'>
                                <img src="/assets/neptune-circle.png" className='me-4' alt="" />
                                <span>Neptune</span></Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}


