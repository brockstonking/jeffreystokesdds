import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    constructor (props) {
        super (props);
    }

    render () {
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
        const footerLinks = menuLinkItems.map( e => {
            return <div className='footerLinkParent'>
                <Link className='footerLink' to={ e.link }><p className='footerLinkText'>{ e.title }</p></Link>
            </div>
        })
        return (
            <div className='footerParent'>
                <div className={this.props.mobile ? 'footerDescriptionMobile' : 'footerDescription'}>
                    <p>Jeffrey Stokes is a general dentist that has been in practice since 1993. He has served the Henderson/Las Vegas area since that time, and looks forward to continuing to do so.</p>
                    <p className='copyWrite'>© 2019 Jeffrey Stokes, DDS - Henderson, NV</p>
                </div>
                <div className={this.props.mobile ? 'footerLinksMobile' : 'footerLinks'}>
                    { footerLinks }
                </div>
            </div>
        )
    }
}

export default Footer;