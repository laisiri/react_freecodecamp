import React from 'react';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <h1>Test React In FreeCodeCamp</h1>
    </div>
  );
}
function Curriculum(props) {
  return (
    <div>
      <h3>Curriculum</h3>
      <p>{props.curri}</p>
    </div>
  
  );
}
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h1>Test React In FreeCodeCamp</h1>
        <Curriculum curri = {"Compose React Component"} />
      </div>
    );

  }
}*/
function Car (props) {
return <p>{this.props.brand}</p>
}

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h2>The car in garage is</h2>
        <Car brand={'Toyota'} />
      </div>
    )
  }
}
export default App;
