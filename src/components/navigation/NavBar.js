import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div className='navBarParent'>
                <h1 className='testTitle'>This is the navbar.</h1>
                <div className='navBarLinkContainer'>
                    <Link className='navBarLink navBarHomePage'><p className='innerNavBarLinkText'>Home</p></Link>
                    <Link className='navBarLink navBarNewPatient'><p className='innerNavBarLinkText'>New Patient</p></Link>
                    <Link className='navBarLink navBarAboutUs'><p className='innerNavBarLinkText'>Our Team</p></Link>
                    <Link className='navBarLink navBarContactUs'><p className='innerNavBarLinkText'>Contact Us</p></Link>
                </div>
            </div>
        )
    };
}

export default NavBar;