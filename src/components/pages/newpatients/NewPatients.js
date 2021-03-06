import React, { Component } from 'react';
import './NewPatients.css';
import DentalTools from './dentistTools.jpg';
import NewPatientFile from './JSDDSNewPatient.pdf';
import * as Actions from './../../../ducks/reducer';
import {connect} from 'react-redux';

class NewPatients extends Component {
    constructor(props){
        super(props);

        this.state = {
            isMobile: window.innerWidth < 480 ? true : false,
            os: 'Mac'
        }
    };

    componentWillMount = () => {
        this.props.updateRoutePath('/newpatients');
        if (navigator.userAgent.indexOf('Mac') <= 0) {
            this.setState({
                os: 'Pc'
            })
            console.log('Running on PC')
        }
        
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
      }

    checkIfMobileView = () => {
        this.setState({
            isMobile: window.innerWidth < 716 ? true : false
        })
    }

    render(){
        window.addEventListener('resize', this.checkIfMobileView);
        let descriptionClassName;
        if (this.state.os == 'Pc' && !this.state.isMobile) {
            descriptionClassName = 'newPatientDescriptionPc'
        } else if (this.state.isMobile) {
            descriptionClassName = 'newPatientDescriptionMobile'
        } else {
            descriptionClassName = 'newPatientDescription'
        }
        return (
            <div className={this.state.isMobile ? 'newPatientParentMobile' : 'newPatientParent'}>
                <div className={this.state.isMobile ? 'newPatientTitleAndDescriptionMobile' : 'newPatientTitleAndDescription'}>
                    <h1 className='newPatientTitle'>New Patient Form</h1>
                    <p className={descriptionClassName}>We are honored to welcome you to our dental office family! Before your first appointment, please print and fill out our New Patient Form and bring it to the office with you. This will help reduce the amount of time you spend waiting. Please also bring a form of ID and dental insurance card (if applicable).</p>
                    <a href={ NewPatientFile } download className='newPatientDownloadLink'><div className='newPatientDownloadButton'><p className='newPatientDownloadText'>Download New Patient Form</p></div></a>
                </div>
                <div className={this.state.isMobile ? 'newPatientImageParentMobile' : 'newPatientImageParent'}>
                    <img src={DentalTools} alt='dentistry-tools' className='newPatientImage' />
                </div>
            </div>
        )
    };
}

export default connect(state => state, Actions)(NewPatients);