import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Sample from './components/Sample'
import Presentation from './components/Enhanced-Presentation'
import Counter from './components/Enhanced-Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Visible set to true</p>
        <h2>
          <Sample visible={true} />
        </h2>
        <br />
        <p>Visible set to false</p>
        <h2>
          <Sample visible={false} />
        </h2>
        <br />
        <p>
          Visible will not be set and it will randomly generate its visibility
          by 50 percent chance
        </p>
        <h2>
          <Sample />
        </h2>
        <hr/>

        <div>
          <h1>Using Recompose</h1>
          <Presentation />
        </div>
        <hr/>

        <div>
          <h1>Enhanced Counter using Recompose</h1>
          <Counter />
        </div>
      </div>
    )
  }
}

export default App
