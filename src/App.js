import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';

class App extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return(
      <Router>
        <div className='App'>
          <NavBar />
          { routes }
        </div>
      </Router>
    )
  }
}
export default App;
