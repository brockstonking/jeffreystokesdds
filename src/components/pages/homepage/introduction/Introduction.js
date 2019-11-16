import React, { Component } from 'react';
import './Introduction.css';

class Introduction extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className='introductionParent'>
                <h1 className='introductionTitle'>Dentistry Done Right</h1>
                <p className={this.props.mobile ? 'introductionParagraphMobile' : 'introductionParagraph'}>Dr. Jeffrey Stokes has been practicing general dentistry in the Henderson, NV area for over 25 years. His seasoned experience gives him unique skills to not only help you look good, but also get your oral health back to where it needs to be. Offering general, cosmetic and implant services and much, much more, Dr. Stokes is a dentist for the whole family. To schedule an appointment, calls us at (number) or (book it online) today!</p>
            </div>
        )
    }
}

export default Introduction;