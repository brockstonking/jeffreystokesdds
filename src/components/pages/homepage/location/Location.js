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
                    <p className='getDirectionsText'>Get Directions</p>
                </div>
            </div>
        )
    }
}

export default Location;