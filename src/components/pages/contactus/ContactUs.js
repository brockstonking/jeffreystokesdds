import React, { Component } from 'react';
import './ContactUs.css';
import axios from 'axios';
import DentalTools3 from './dentalTools3.png';
import {connect} from 'react-redux';
import * as Actions from './../../../ducks/reducer';

class ContactUs extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            phone: '',
            email: '',
            serviceRequested: '',
            prefferedTime: '',
            notesOrQuestions: '',
            isMobile: window.innerWidth < 480 ? true : false,
            disabled: false
        }
    };

    componentWillMount = () => {
        this.props.updateRoutePath('/contactus');
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
      }

    updateState = (e) => {
        this.setState({
            [e.name]: e.value
        })
    }

    checkIfMobileView = () => {
        this.setState({
            isMobile: window.innerWidth < 480 ? true : false
        })
    }

    //add phone

    sendEmail = () => {
        this.setState({
            disabled: true
        })
        const {
            name,
            phone,
            email,
            serviceRequested,
            prefferedTime,
            notesOrQuestions
        } = this.state;
        if (name && email && notesOrQuestions) {
            axios.post('/api/send_email', {
                name: name,
                phone: phone,
                email: email,
                serviceRequested: serviceRequested,
                prefferedTime: prefferedTime,
                notesOrQuestions: notesOrQuestions
            })
            .then(results => {
                this.setState({
                    name: '',
                    phone: '',
                    email: '',
                    serviceRequested: '',
                    prefferedTime: '',
                    notesOrQuestions: '',
                    disabled: false
                });
                window.alert(results.data.response);
                console.log(results.data.info);
            })
            .catch( err => {
                console.log(err)
                window.alert('There was an error.')
            });
        } else {
            window.alert('Please complete all required fields to proceed.')
        }
        
    }

    render(){
        window.addEventListener('resize', this.checkIfMobileView);
        const imgForMobile = !this.state.isMobile ? null : <img className={this.state.isMobile ? 'contactUsImageMobile' : 'contactUsImage'} src={DentalTools3} alt='' />
        const imgForDesktop = this.state.isMobile ? null : <img className={this.state.isMobile ? 'contactUsImageMobile' : 'contactUsImage'} src={DentalTools3} alt='' />
        return (
            <div className={this.state.isMobile ? 'contactUsParentMobile' : 'contactUsParent'}>
                <h1 className={this.state.isMobile ? 'contactUsTitleMobile' : 'contactUsTitle'}>If you have questions, please call us at <a href='tel:7025664133' className='contactUsTelephone'>(702) 566-4133</a>, or if you prefer you may ask a question or request an appointment below:</h1>
                <div className={this.state.isMobile ? 'contactUsMainBodyMobile' : 'contactUsMainBody'}>
                    {imgForDesktop}
                    <div className={this.state.isMobile ? 'contactUsFormMobile' : 'contactUsForm'} >
                        <div className={this.state.isMobile ? 'inputParentMobile' : 'inputParent'}>
                            <p className={this.state.isMobile ? 'inputTitleMobile' : 'inputTitle'}>Name*</p>
                            <input className={this.state.isMobile ? 'inputInputMobile' : 'inputInput'} disabled={this.state.disabled} name='name' onChange={ e => this.updateState(e.target)} value={this.state.name} />
                        </div>
                        <div className={this.state.isMobile ? 'inputParentMobile' : 'inputParent'}>
                            <p className={this.state.isMobile ? 'inputTitleMobile' : 'inputTitle'}>Email*</p>
                            <input className={this.state.isMobile ? 'inputInputMobile' : 'inputInput'} disabled={this.state.disabled} name='email' onChange={ e => this.updateState(e.target)} value={this.state.email} />
                        </div>
                        <div className={this.state.isMobile ? 'inputParentMobile' : 'inputParent'}>
                            <p className={this.state.isMobile ? 'inputTitleMobile' : 'inputTitle'}>Phone</p>
                            <input className={this.state.isMobile ? 'inputInputMobile' : 'inputInput'} disabled={this.state.disabled} name='phone' onChange={ e => this.updateState(e.target)} value={this.state.phone} />
                        </div>
                        <div className={this.state.isMobile ? 'inputParentMobile' : 'inputParent'}>
                            <p className={this.state.isMobile ? 'inputTitleMobile' : 'inputTitle'}>Service you are requesting (checkup, crown, etc.)</p>
                            <input className={this.state.isMobile ? 'inputInputMobile' : 'inputInput'} disabled={this.state.disabled} name='serviceRequested' onChange={ e => this.updateState(e.target)} value={this.state.serviceRequested} />
                        </div>
                        <div className={this.state.isMobile ? 'inputParentMobile' : 'inputParent'}>
                            <p className={this.state.isMobile ? 'inputTitleMobile' : 'inputTitle'}>Preferred time of day</p>
                            <input className={this.state.isMobile ? 'inputInputMobile' : 'inputInput'} disabled={this.state.disabled} name='prefferedTime' onChange={ e => this.updateState(e.target)} value={this.state.prefferedTime} />
                        </div>
                        <div className={this.state.isMobile ? 'inputParentMobile' : 'inputParent'}>
                            <p className={this.state.isMobile ? 'inputTitleMobile' : 'inputTitle'}>Questions or additional notes*</p>
                            <textarea rows='3' className={this.state.isMobile ? 'inputInputMobile' : 'inputInput'} disabled={this.state.disabled} name='notesOrQuestions' onChange={ e => this.updateState(e.target)} value={this.state.notesOrQuestions} />
                        </div>
                        <div onClick={() => this.sendEmail()} className='contactUsSubmitEmailButton'>Submit</div>
                    </div>
                    {imgForMobile}
                </div>
            </div>
        )
    };
}

export default connect(state => state, Actions)(ContactUs);