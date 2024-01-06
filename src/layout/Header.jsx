import React, { useEffect, useState } from 'react';
import { Nav, Container, NavbarBrand, NavbarCollapse, NavbarToggle, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {


    return (
        <header className='page-header'>
            <Navbar collapseOnSelect expand="md" className=''>
                <Container>
                    <NavbarBrand>
                        <h1 className='text-uppercase'>The Planets</h1>
                    </NavbarBrand>
                    <NavbarToggle aria-controls='navbarScroll' id='navbarBtn' className='custom-toggler' />
                    <NavbarCollapse id='navbarCollapse'>
                        <Nav className='me-auto' id='navbarNav'>
                            <Link to='/mercury' className='planet-page-link text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25' id='border-0'>
                                <div>
                                    <img src="/assets/mercury-circle.png" className='me-4' alt="" />
                                    <span>Mercury</span>
                                </div>
                                <div>
                                    <img src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </Link>

                            <Link to='/venus' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/venus-circle.png" className='me-4' alt="" />
                                    <span>Venus</span>
                                </div>
                                <div>
                                    <img src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </Link>

                            <Link to='/earth' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/earth-circle.png" className='me-4' alt="" />
                                    <span>Earth</span>
                                </div>
                                <div>
                                    <img src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </Link>

                            <Link to='/mars' className='planet-page-link text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/mars-circle.png" className='me-4' alt="" />
                                    <span>Mars</span>
                                </div>
                                <div>
                                    <img src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </Link>

                            <Link to='/jupiter' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/jupiter-circle.png" className='me-4' alt="" />
                                    <span>Jupiter</span>
                                </div>
                                <div>
                                    <img src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </Link>

                            <Link to='/saturn' className='planet-page-link text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/saturn-circle.png" className='me-4' alt="" />
                                    <span>Saturn</span>
                                </div>
                                <div>
                                    <img src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </Link>

                            <Link to='/uranus' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/uranus-circle.png" className='me-4' alt="" />
                                    <span>Uranus</span>
                                </div>
                                <div>
                                    <img src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </Link>

                            <Link to='/neptune' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/neptune-circle.png" className='me-4' alt="" />
                                    <span>Neptune</span>
                                </div>
                                <div>
                                    <img src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}


