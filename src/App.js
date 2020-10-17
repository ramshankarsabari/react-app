import React,{Component} from 'react';
import './App.css';
import Main from './components/MainComponent';

class App extends Component{

  render(){
    return (
      <div >
        <Main/>
      </div>
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