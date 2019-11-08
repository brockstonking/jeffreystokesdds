import React, { Component } from 'react';
import './Introduction.css';

class Introduction extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className='introductionParent'>
                <h1 className='introductionTitle'>You want an experienced dentist. We're here to help.</h1>
                <p className={this.props.mobile ? 'introductionParagraphMobile' : 'introductionParagraph'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        )
    }
}

export default Introduction;