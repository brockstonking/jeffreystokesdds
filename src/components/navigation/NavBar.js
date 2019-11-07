import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import throttle from 'lodash.throttle';

class NavBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            isMobile: false
        }
    };

    checkIfMobileView = () => {
        this.setState({
            isMobile: window.innerWidth < 480 ? true : false
        })
    }
    
    render(){
        window.addEventListener('resize', this.checkIfMobileView)
        let menuItems = !this.state.isMobile
        ? <div className='navBarLinkContainer'>
            <Link className='navBarLink navBarHomePage' to='/'><p className='innerNavBarLinkText'>Home</p></Link>
            <Link className='navBarLink navBarNewPatient' to='/newpatients'><p className='innerNavBarLinkText'>New Patients</p></Link>
            <Link className='navBarLink navBarAboutUs' to='/aboutus'><p className='innerNavBarLinkText'>Our Team</p></Link>
            <Link className='navBarLink navBarContactUs' to='contactus'><p className='innerNavBarLinkText'>Contact Us</p></Link>
        </div>
        : <div className='navBarLinkContainerMobile'>
            <img className='menuIcon' alt='' src='' />
            <div className='menuItemsDropdown'>
                I have menu items!
            </div>
        </div>
        return (
            <div className='navBarParent'>
                <div className='logoHolder'>
                    <p className='logoText J'>J</p><p className='logoText S'>S</p>
                </div>
                { menuItems }
            </div>
        )
    };
}

export default NavBar;