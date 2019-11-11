import React, { Component } from 'react';
import './Location.css';


class Location extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className={this.props.mobile ? 'locationParentMobile' : 'locationParent'}>
                <img className='locationDivImage' src='https://i.ibb.co/VqqNQNS/googlemap.png' alt='Location on Google Maps' />
                <div className='getDirectionsButton'>
                    <a href='https://www.google.com/maps/dir//Jeffrey+Stokes,+DDS,+East+Lake+Mead+Parkway,+Henderson,+NV/@36.0373182,-115.0197392,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x80c8d6b98024b15f:0x872736327d777296!2m2!1d-114.9847198!2d36.0372539!3e2' className='locationHref' target='_blank'><p className='getDirectionsText'>Get Directions</p></a>
                </div>
            </div>
        )
    }
}

export default Location;