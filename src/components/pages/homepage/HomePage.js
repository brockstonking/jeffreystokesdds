import React, { Component } from 'react';
import './HomePage.css';
import Testimonials from './testimonials/Testimonials';
import Introduction from './introduction/Introduction';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            isMobile: window.innerWidth < 480 ? true : false
        }
    }

    checkIfMobileView = () => {
        this.setState({
            isMobile: window.innerWidth < 480 ? true : false
        })
    }

    render(){
        window.addEventListener('resize', this.checkIfMobileView);
        return (
            <div>
                <div className='homePageMainPhotoParent'>
                    <img className='homePageMainPhoto' src='https://i.ibb.co/DC1Tcg5/smile-2.jpg' alt='' />
                </div>
                <div className='titleAndSubTitleParent'>
                    <h1 className='jeffreyStokesDDSTitle'>Jeffrey Stokes, DDS</h1>
                    <h3 className='jeffreyStokesDDSSubTitle'>Serving Families Since 1990</h3>
                </div>
                <div className='homePageIntroductionParent'>
                    <Introduction mobile={ this.state.isMobile } />
                </div>
                <div className='homePageTestimonialsParent'>
                    <Testimonials mobile={ this.state.isMobile } />
                </div>
            </div>
        )
    };
}

export default HomePage;