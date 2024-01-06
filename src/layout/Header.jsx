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
                            <Link to='/mercury' className='planet-page-link text-uppercase link-underline link-underline-opacity-0 d-sm-inline-flex flex-sm-row' id='border-0'>
                                <img src="/assets/mercury-circle.png" className='me-4' alt="" />
                                <span>Mercury</span>
                            </Link>
                            <Link to='/venus' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0'>Venus</Link>
                            <Link to='/earth' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0'>Earth</Link>
                            <Link to='/mars' className='planet-page-link text-uppercase link-underline link-underline-opacity-0'>Mars</Link>
                            <Link to='/jupiter' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0'>Jupiter</Link>
                            <Link to='/saturn' className='planet-page-link text-uppercase link-underline link-underline-opacity-0'>Saturn</Link>
                            <Link to='/uranus' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0'>Uranus</Link>
                            <Link to='/neptune' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0'>Neptune</Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}


