import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div>
                <div className='homePageMainPhotoParent'>
                    <img className='homePageMainPhoto' src='https://i.ibb.co/BzwHM0H/lesly-juarez-1-Ah-GNGKuh-R0-unsplash.jpg' alt='' />
                </div>
                <div className='titleAndSubTitleParent'>
                    <h1 className='jeffreyStokesDDSTitle'>Jeffrey Stokes, DDS</h1>
                    <h3 className='jeffreyStokesDDSSubTitle'>Serving Families Since 1990</h3>
                </div>
                <div classname='testimonialsparent'>
                    <h1>testimonials</h1>
                </div>
            </div>
        )
    };
}

export default HomePage;