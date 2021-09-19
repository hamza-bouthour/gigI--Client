import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (bands, user) =>{
    return {
        bands,
        user
    }
}


const Header = (props) => {
    const dis = window.innerWidth;
    const [isOpen, setIsOpen] = useState(false);
    const [accountBtnDisplay, setAccountBtnDisplay] = useState('flex');
    const toggleNav = () => setIsOpen(!isOpen);


    React.useEffect(() => {
        function handleResize() {
          window.innerWidth < 767 ? setAccountBtnDisplay('none') : setAccountBtnDisplay('flex')
        
        }
        window.addEventListener('resize', handleResize)
        console.log(props.bands.user.loggedIn, 'HHHHHHHHHHHHHHHHHHHHHHHHH')
      },[])
      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
      const LoginIcon = props => {
        if(props.username) {
            return (
                <div>
                    <i className="fa fa-user-circle mr-2" />
                    {capitalize(props.username)}
                </div>
            )
        }
        return (
            <div>Login</div>
        )
       
    }

    return (
        <div className="nav-container">
            <Navbar
                color="faded"
                dark
                expand="md"  
            >
                <NavbarBrand
                    href="/home"
                    // style={{margin: "0px"}}
                >
                    GigIt
                </NavbarBrand>
                <NavbarToggler 
                    onClick={toggleNav} 
                />
                <Collapse
                    isOpen={isOpen}
                    navbar
                    
                >
                    <Nav >
                        <NavItem >
                            <Link to='/home' className='navLinks '>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/bands' className='navLinks'>
                                Bands
                            </Link>
                        </NavItem>
                        {/* <NavItem >
                            <Link to='/bands' className='navLinks' style={{color: '#fff', position: 'absolute', right: '20px'}}>
                                Bands
                            </Link>
                        </NavItem> */}
                    </Nav> 
                </Collapse>
                <img src="https://i.postimg.cc/XqjW0KSm/9e00586c13bf42fbbbdce9f2643a932a-1.png" className="absoluteLogo" />
                <div className="btn-account-box" style={{display: window.innerWidth > 767 ? 'flex': 'none' || accountBtnDisplay}}>
                    <Link to='/login' className='nav-btn px-4 ' 
                        style={{ marginRight: 0}}>
                            <LoginIcon username={props.bands.user.user ? props.bands.user.user.username : ''} />
                            
                    </Link>
                    {/* <Link to='/profile' className='nav-btn px-4 ' 
                        style={{ marginRight: 0}}>
                        Profile
                    </Link> */}

                </div>
            </Navbar>
        </div>
    )

}


export default connect(mapStateToProps)(Header);
