import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
    constructor(props){
        super(props);

        this.state = {
            biographies: [
                {
                    img: 'somesrc',
                    name: 'somename',
                    bio: 'somebio'
                }
            ]
        }
    };

    render(){
        console.log(this.state.biographies);
        return (
            <div>
                <h1>This is the about us page.</h1>
            </div>
        )
    };
}

export default AboutUs;