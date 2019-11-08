import React, { Component } from 'react';
import './HomePage.css';
import Testimonials from './testimonials/Testimonials';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            isMobile: window.innerWidth < 480 ? true : false,
        }
    };

    render(){
        return (
            <div>
                <div className='homePageMainPhotoParent'>
                    <img className='homePageMainPhoto' src={this.state.isMobile ? '' : 'https://i.ibb.co/BzwHM0H/lesly-juarez-1-Ah-GNGKuh-R0-unsplash.jpg'} alt='' />
                </div>
                <div className='titleAndSubTitleParent'>
                    <h1 className='jeffreyStokesDDSTitle'>Jeffrey Stokes, DDS</h1>
                    <h3 className='jeffreyStokesDDSSubTitle'>Serving Families Since 1990</h3>
                </div>
                <div className='testimonialsParent'>
                    <Testimonials />
                </div>
            </div>
        )
    };
}

export default HomePage;