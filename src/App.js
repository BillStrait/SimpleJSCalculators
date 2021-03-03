//import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
          <header className="App-header">
            <h1>Some Simple Javascript Calculators</h1>
          </header>
          <main>
              <F2c/>
          </main>
    </div>
  );
}



class F2c extends React.Component {
    constructor(props){
        super(props);
        this.state = { f: 0, c: 0, }
        this.UpdateC = this.UpdateC.bind(this);
        this.UpdateF = this.UpdateF.bind(this);
    }
    UpdateC(event){
        var updatedC = ((event.target.value - 32) * (5 / 9)).toFixed(2);
        this.setState({ f: event.target.value, c: updatedC });
    };
    UpdateF(event){
        var updatedF = ((event.target.value * 1.8) + 32).toFixed(2);
        this.setState({ c: event.target.value, f: updatedF });
    };
    render() {
        return (
            <div className="calcHolder">
                <label>Fahrenheit: </label><input id="fValue" value={this.state.f} onChange={this.UpdateC} /><br />
                <label>Celsius: </label><input id="cValue" value={this.state.c} onChange={this.UpdateF} /> <br />
            </div>
        );
    }
}

export default App;
