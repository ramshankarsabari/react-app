import React,{Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

class App extends Component{

  render(){
    return (
      <BrowserRouter>
      <div >
        <Main/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;


//React component lifecycle
//React component goes through the following life cycle changes
//1. MOUNTING 2.UPDATING 3.UNMOUNTING

//1.MOUNTING - methods (called when an instance of a component is being created and inserted into the DOM)
//       constructor(),getDerivedStateFromProps(),render(),componentDidMount()

//2.UPDATING-