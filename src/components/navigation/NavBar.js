import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            isMobile: window.innerWidth < 480 ? true : false,
            showMenuItemsDropdown: false
        }
    };

    checkIfMobileView = () => {
        this.setState({
            isMobile: window.innerWidth < 480 ? true : false
        })
    }

    dropdownHideOrDisplay = () => { this.setState({ showMenuItemsDropdown: this.state.showMenuItemsDropdown ? false : true }) }
    
    render(){
        window.addEventListener('resize', this.checkIfMobileView)

        const menuLinkItems = [
            {
                title: 'Home',
                link: '/'
            },
            {
                title: 'New Patients',
                link: '/newpatients'
            },
            {
                title: 'Our Team',
                link: '/aboutus'
            },
            {
                title: 'Contact Us',
                link: '/contactus'
            }
        ]

        let menuItems = !this.state.isMobile
        ? <div className='navBarLinkContainer'>
            <Link className='navBarLink navBarHomePage' to='/'><p className='innerNavBarLinkText'>Home</p></Link>
            <Link className='navBarLink navBarNewPatient' to='/newpatients'><p className='innerNavBarLinkText'>New Patients</p></Link>
            <Link className='navBarLink navBarAboutUs' to='/aboutus'><p className='innerNavBarLinkText'>Our Team</p></Link>
            <Link className='navBarLink navBarContactUs' to='/contactus'><p className='innerNavBarLinkText'>Contact Us</p></Link>
        </div>
        : <div className='navBarLinkContainerMobile'>
            <img className='menuIcon' src='https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg' alt='' onClick={() => this.dropdownHideOrDisplay()}/>
            <div className={ this.state.showMenuItemsDropdown ? 'menuItemsDropdown' : 'menuItemsDropdownHidden' }>
                {menuLinkItems.map( e => {
                    return <div className={`dropdownMenuItemContainer dropdownMenuItemContainer${ e.title }`}>
                        <Link className={`dropdownMenuItem dropdown${e.title.replace(' ', '')}`} to={ e.link } onClick={() => this.dropdownHideOrDisplay()}>{e.title}</Link>
                    </div>
                })}
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