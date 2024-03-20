import React from 'react';
import { Nav, Container, NavbarBrand, Navbar, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {


    return (
        <header className='page-header container-fluid'>
            <Navbar collapseOnSelect expand="md" className='navbar-dark pb-md-5 pt-lg-5 pb-lg-4 pt-xl-2 pb-xl-2 borderBottom container-fluid'>
                <Container className='d-md-flex flex-md-column flex-xl-row justify-content-lg-between' fluid>
                    <NavbarBrand>
                        <h1 className='text-uppercase pb-md-3  pt-lg-3 ms-xl-5 page-title'>The Planets</h1>
                    </NavbarBrand>
                    <NavbarToggle aria-controls='navbarScroll' id='navbarBtn' className='custom-toggler' />
                    <NavbarCollapse id='navbarCollapse' className='flex-lg-grow-0'>
                        <Nav className='me-auto d-md-inline-flex justify-content-md-center align-items-md-start gap-4 gap-md-3 gap-lg-4 pe-md-2 pe-lg-5' id='navbarNav'>
                            <NavLink to='/mercury' id='mercury' className='planet-page-link text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/mercury-circle.png" className='me-4 d-md-none' alt="" />
                                    <span>Mercury</span>
                                </div>
                                <div>
                                    <img className='d-md-none' src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </NavLink>

                            <NavLink to='/venus' id='planet-venus' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/venus-circle.png" className='me-4 d-md-none' alt="" />
                                    <span>Venus</span>
                                </div>
                                <div>
                                    <img className='d-md-none' src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </NavLink>

                            <NavLink to='/earth' id='planet-earth' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/earth-circle.png" className='me-4 d-md-none' alt="" />
                                    <span>Earth</span>
                                </div>
                                <div>
                                    <img className='d-md-none' src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </NavLink>

                            <NavLink to='/mars' id='planet-mars' className='planet-page-link text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/mars-circle.png" className='me-4 d-md-none' alt="" />
                                    <span>Mars</span>
                                </div>
                                <div>
                                    <img className='d-md-none' src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </NavLink>

                            <NavLink to='/jupiter' id='planet-jupiter' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/jupiter-circle.png" className='me-4 d-md-none' alt="" />
                                    <span>Jupiter</span>
                                </div>
                                <div>
                                    <img className='d-md-none' src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </NavLink>

                            <NavLink to='/saturn' id='planet-saturn' className='planet-page-link text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/saturn-circle.png" className='me-4 d-md-none' alt="" />
                                    <span>Saturn</span>
                                </div>
                                <div>
                                    <img className='d-md-none' src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </NavLink>

                            <NavLink to='/uranus' id='planet-uranus' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/uranus-circle.png" className='me-4 d-md-none' alt="" />
                                    <span>Uranus</span>
                                </div>
                                <div>
                                    <img className='d-md-none' src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </NavLink>

                            <NavLink to='/neptune' id='planet-neptune' className='planet-page-link  text-uppercase link-underline link-underline-opacity-0 d-inline-flex justify-content-between align-items-center border-bottom border-secondary border-1 border-opacity-25'>
                                <div>
                                    <img src="/assets/neptune-circle.png" className='me-4 d-md-none' alt="" />
                                    <span>Neptune</span>
                                </div>
                                <div>
                                    <img className='d-md-none' src="/assets/icon-chevron.svg" alt="" />
                                </div>
                            </NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    )


}

