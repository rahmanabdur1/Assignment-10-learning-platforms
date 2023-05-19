import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../../LeftSideNav/LeftSideNav';

import './Header.css';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { DarkModeContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    };
    const toggleDarkMode = () => {
        const updatedDarkMode = !darkMode;
        setDarkMode(updatedDarkMode);

    };


    return (
        <Navbar sticky="top" expand="lg" className={`shadow rounded ${darkMode ? 'bg-dark ' : 'bg-info'}`} >
            <Container >
                <Navbar.Brand>
                    <Link className='fs-2' to='/'>English</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={`text-${darkMode ? 'light' : ''}`}>
                    <Nav className="me-auto d-flex  align-items-center">
                        <Nav.Link className={`fs-4 text-${darkMode ? 'light' : ''}`} href="/">Home</Nav.Link>
                        <Nav.Link className={`fs-4 text-${darkMode ? 'light' : ''}`} href="/course">Course</Nav.Link>
                        <Nav.Link className={`fs-4 text-${darkMode ? 'light' : ''}`} href="/about">About</Nav.Link>
                        <Nav.Link className={`fs-4 text-${darkMode ? 'light' : ''}`} href="/faq">Faq</Nav.Link>
                    </Nav>

                    <Nav className='d-flex align-items-center'>
                        {user?.uid ? (
                            <>
                                <span style={{ marginRight: '8px' }}>{user?.displayName}</span>
                                <Button variant="outline-danger" style={{ marginRight: '5px' }} onClick={handleLogOut}>LogOut</Button>
                            </>
                        ) : (
                            <>
                                <Button variant="outline-dark" style={{ marginRight: '5px' }} className=" "  >
                                    <Link className="text-decoration-none" to='/login'>Login</Link>
                                </Button>
                                <Button variant="outline-dark"  >
                                    <Link className="text-decoration-none" to='/register'>Register</Link>
                                </Button>
                            </>
                        )}

                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Link to='/profile'>
                            {
                                user?.photoURL ?
                                    <Image

                                        className='mt-3 d-flex align-items-center'
                                        style={{ height: '40px', marginTop: '8px' }}
                                        roundedCircle

                                        src={user?.photoURL}

                                    ></Image>
                                    :
                                    ''
                                // <FaUser className='d-flex align-items-center' ></FaUser>
                            }
                        </Link>
                    </Nav>
                    <Nav className='d-flex align-items-center' style={{ marginLeft: '5px' }}>
                        <div className='dark-mode-toggle'>
                            <input type="checkbox" id="darkModeToggle" checked={darkMode} onChange={toggleDarkMode} />
                            <label htmlFor="darkModeToggle">Dark Mode</label>
                        </div>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
