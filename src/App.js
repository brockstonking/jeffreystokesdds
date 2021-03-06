import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
import { Provider } from 'react-redux';
import store from './ducks/store';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isMobile: window.innerWidth < 760 ? true : false
    }
  }
  


  checkIfMobileView = () => {
    this.setState({
        isMobile: window.innerWidth < 760 ? true : false
    })
  }


  render(){
    window.addEventListener('resize', this.checkIfMobileView);
    return(
      <Provider store={ store }>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <div className='App'>
            <NavBar mobile={this.state.isMobile} />
            { routes }
            <Footer mobile={this.state.isMobile} />
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App;
