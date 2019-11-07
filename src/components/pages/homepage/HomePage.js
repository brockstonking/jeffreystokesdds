import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div>
                <h1 className='jeffreyStokesDDSTitle'>Jeffrey Stokes, DDS</h1>
                <h3 className='jeffreyStokesDDSSubTitle'>Serving families since 1990</h3>
            </div>
        )
    };
}

export default HomePage;