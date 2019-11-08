import React, { Component } from 'react';
import './HomePage.css';
import Testimonials from './testimonials/Testimonials';
import Introduction from './introduction/Introduction';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
<<<<<<< HEAD
            isMobile: window.innerWidth < 480 ? true : false
        }
    }

    checkIfMobileView = () => {
        this.setState({
            isMobile: window.innerWidth < 480 ? true : false
        })
    }
=======
            isMobile: window.innerWidth < 480 ? true : false,
        }
    };
>>>>>>> cd27e1f8a1be7e70bb67543d4a8c4477d76fc997

    render(){
        window.addEventListener('resize', this.checkIfMobileView);
        return (
            <div>
                <div className='homePageMainPhotoParent'>
<<<<<<< HEAD
                    <img className='homePageMainPhoto' src='https://i.ibb.co/DC1Tcg5/smile-2.jpg' alt='' />
=======
                    <img className='homePageMainPhoto' src={this.state.isMobile ? '' : 'https://i.ibb.co/BzwHM0H/lesly-juarez-1-Ah-GNGKuh-R0-unsplash.jpg'} alt='' />
>>>>>>> cd27e1f8a1be7e70bb67543d4a8c4477d76fc997
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