import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar
                color="light"
                light
                expand="md"
            >
                <NavbarBrand
                    href="/"
                >
                    GigIT
                </NavbarBrand>
                <NavbarToggler 
                    onClick={toggleNav} 
                />
                <Collapse
                    isOpen={isOpen}
                    navbar
                >
                    <Nav>
                        <NavItem className='navLinks' style={{marginLeft: 20}}>
                            <Link to='/home'>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem className='navLinks'>
                            <Link to='/bands'>
                                Bands
                            </Link>
                        </NavItem>
                    </Nav> 
                </Collapse>
            </Navbar>
        </div>
    )

}


export default Header;