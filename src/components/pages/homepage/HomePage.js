import React, { Component } from 'react';
import './HomePage.css';
import Testimonials from './testimonials/Testimonials';
import Introduction from './introduction/Introduction';
import Location from './location/Location';
import {connect} from 'react-redux';
import * as Actions from './../../../ducks/reducer';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            isMobile: window.innerWidth < 480 ? true : false
        }
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
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
                    <img className={this.state.isMobile ? 'homePageMainPhotoMobile' : 'homePageMainPhoto'} src='https://i.ibb.co/DC1Tcg5/smile-2.jpg' alt='' />
                </div>
                <div className={this.state.isMobile ? 'titleAndSubTitleParentMobile' : 'titleAndSubTitleParent'}>
                    <h1 className='jeffreyStokesDDSTitle'>Jeffrey Stokes, DDS</h1>
                    <h3 className='jeffreyStokesDDSSubTitle'>Serving Families Since 1993</h3>
                </div>
                <div className='homePageIntroductionParent'>
                    <Introduction mobile={ this.state.isMobile } />
                </div>
                <div className='homePageTestimonialsParent'>
                    <Testimonials mobile={ this.state.isMobile } />
                </div>
                <div>
                    <Location mobile={ this.state.isMobile } />
                </div>
            </div>
        )
    };
}

export default connect(state => state, Actions)(HomePage);