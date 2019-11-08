import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            isMobile: window.innerWidth < 716 ? true : false,
            showMenuItemsDropdown: false,
            currentRoute: '/'
        }
    };

    checkIfMobileView = () => {
        this.setState({
            isMobile: window.innerWidth < 716 ? true : false
        })
    }

    dropdownHideOrDisplay = () => { this.setState({ showMenuItemsDropdown: this.state.showMenuItemsDropdown ? false : true }) }

    changeCurrentRoute = (val) => {
        this.setState({
            currentRoute: val
        })
    }
    
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
        ];

        let menuItems = !this.state.isMobile
        ? <div className='navBarLinkContainer'>
            <Link className='navBarLink navBarHomePage' to='/' onClick={() => this.changeCurrentRoute('/')} ><p className='innerNavBarLinkText' style={this.state.currentRoute == '/' ? { color: 'goldenrod' } : {}} >Home</p></Link>
            <Link className='navBarLink navBarNewPatient' to='/newpatients' onClick={() => this.changeCurrentRoute('/newpatients')} ><p className='innerNavBarLinkText' style={this.state.currentRoute == '/newpatients' ? { color: 'goldenrod' } : {}} >New Patients</p></Link>
            <Link className='navBarLink navBarAboutUs' to='/aboutus' onClick={() => this.changeCurrentRoute('/aboutus')} ><p className='innerNavBarLinkText' style={this.state.currentRoute == '/aboutus' ? { color: 'goldenrod' } : {}} >Our Team</p></Link>
            <Link className='navBarLink navBarContactUs' to='/contactus' onClick={() => this.changeCurrentRoute('/contactus')} ><p className='innerNavBarLinkText' style={this.state.currentRoute == '/contactus' ? { color: 'goldenrod' } : {}} >Contact Us</p></Link>
        </div>
        : <div className='navBarLinkContainerMobile'>
            <img className='menuIcon' src='https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg' alt='' onClick={() => this.dropdownHideOrDisplay()}/>
            <div className={ this.state.showMenuItemsDropdown ? 'menuItemsDropdown' : 'menuItemsDropdownHidden' }>
                <Link className='dropdownMenuItem dropdownHome' to='/' onClick={() => {this.changeCurrentRoute('/'); this.dropdownHideOrDisplay(); }} >Home</Link>
                <Link className='dropdownMenuItem dropdownNewPatients' to='/newpatients' onClick={() => {this.changeCurrentRoute('/newpatients'); this.dropdownHideOrDisplay(); }} >New Patients</Link>
                <Link className='dropdownMenuItem dropdownAboutUs' to='/aboutus' onClick={() => {this.changeCurrentRoute('/aboutus'); this.dropdownHideOrDisplay(); }} >About Us</Link>
               <Link className='dropdownMenuItem dropdownContactUs' to='/contactus' onClick={() => {this.changeCurrentRoute('/contactus'); this.dropdownHideOrDisplay(); }} >Contact Us</Link>
            </div>
        </div>
        return (
            <div className='navBarParent'>
                <div className='logoHolder'>
                    <p className='logoText J'>J</p><p className='logoText S'>S</p>
                    <a href='tel:7025664133' className='telephoneNumber'><p className='innerPhoneText'>(702) 566-4133</p></a>
                </div>
                { menuItems }
            </div>
        )
    };
}

export default NavBar;