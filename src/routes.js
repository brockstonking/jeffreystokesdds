import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/homepage/HomePage';
import NewPatients from './components/pages/newpatients/NewPatients';
import ContactUs from './components/pages/contactus/ContactUs';
import AboutUs from './components/pages/aboutus/AboutUs';

export default (
    <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/newpatients' component={ NewPatients } />
        <Route path='/contactus' component={ ContactUs } />
        <Route path='/aboutus' component={ AboutUs } />
    </Switch>
)