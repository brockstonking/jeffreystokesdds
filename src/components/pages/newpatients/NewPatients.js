import React, { Component } from 'react';
import './NewPatients.css';

class NewPatients extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div>
                <a href='/AnthemHilldDental-NewPatientForm.pdf' download>Click to test download</a>
            </div>
        )
    };
}

export default NewPatients;